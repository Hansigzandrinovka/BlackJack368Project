function blackjackGame(){ //game gets initialized when you create a blackjack game
  this.deck = new Deck();
  this.players = this.initPlayers()

  this.initPlayers = function(name){
    var players = [];
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player(name,null,10000));
    return players;
  }

  this.pot = 0;

  this.startGame = function(name){ //called when player clicks start button - every time game , it asks player to keep playing, which calls startGame method
    this.resetGame();
    this.dealCards();
    this.getBets();
    this.playTurns();
    this.resolveGame();
  }

  this.resetGame = function(){ //prepare game for next round - every time game ends, game is reset
    this.resetPlayers();
    this.pot = 0;
    this.refreshScreen(this.players, this.pot, "Let's begin.");
  }

  this.dealCards = function(){ //at start of game, give each player 2 cards
    for(var i=0; i<this.players.length; i++){
      this.players[i].addCards(this.deck.drawCards(2));
      this.refreshScreen(this.players);
    }
  }

  this.resetPlayers = function(){
    for(var i=0; i<this.players.length; i++){
      this.players[i].reset();  //each player needs a reset method that empties out player hand and resets bet stat to 0
    }
  }

  this.getBets = function(){ //polls all players for the amount they want to bet for this game, taking the money from the players
    var bet = 0;
    for(var i=0; i<this.players.length; i++){
      this.pot += this.players[i].getBet(); //player object should update its bankroll
      this.refreshScreen(this.players, this.pot);
    }
  }

  this.playTurns(){
    for(var i=0; i<this.players.length; i++){
      var move = [];
      while(this.players[i].busted == false && this.players[i].myTurn == true){
        move = this.players[i].getMove(); //it is player's turn - will he hit or stand? - for AI, getMove() returns current AI action
        if(move == 'stand'){ //player waits for round to end
          this.players[i].myTurn = false;
        }
        else if(move == 'hit'){ //player gets another card
          this.players[i].addCards(this.deck.drawCards(1));
          var amount = this.players[i].getTotalAmount();
          if(amount > 21){
            this.players[i].busted = true;
            this.players[i].myTurn = false;
          }
        }
        else {
          //do nothing for now
        }
        this.refreshScreen(this.players);
      }
    }
  }

  this.getWinners = function(){ //checks who is not busted, and determines who won
    var winners = [];
    var max = 0;
    for(var i=0; i<this.players.length; i++){
      if(!this.players[i].busted){
        if(this.players[i].getTotalAmount() > max){
          winners = [this.players[i]];
          max = this.players[i].getTotalAmount();
        } else if(this.players[i].getTotalAmount() == max){
          winners.push(this.players[i]);
        }
      }
    }

    if(max == 0){
      //All players were busted, so everyone splits the pot
      return this.players;
    } else {
      return winners;
    }
  }

  this.resolveGame(){
    this.distributeWinnings(this.pot/winners.length, this.getWinners());
    this.collectDiscards();
  }

  this.collectDiscards = function(){
    var discards = [];
    for(var i=0; i<this.players.length; i++){
      discards.concat(this.players[i].returnCards());
    }
    this.deck.returnCards(discards);
  }

  this.distributeWinnings = function(amount, players){
    for(var i=0; i<this.players.length; i++){
      this.players[i].givePlayerMoney(amount);
    }
  }

  this.refreshScreen = function(players, message = ""){ //presumably clears the screen, then updates it with new information
    setTimeout(function(){},2000); //maybe?
    //Call's to Alex's functions here
  }
}

function Deck(){
  this.active = this.initDeck();

  this.initDeck = function(){ //builds deck randomly out of 4 decks of 52 cards
    for(var i=0; i<4; i++){
      for(var j=1; j<=13; j++){
        this.active.push(new Card('spade',i));
        this.active.push(new Card('heart',i));
        this.active.push(new Card('diamond',i));
        this.active.push(new Card('club',i));
      }
    }
    this.shuffle();
  }

  this.discards = [];

  this.drawCards = function(num){
    return this.active.splice(0,num);
  }

  this.returnCards = function(cards){ //returns cards to discard pile
    for(var i=0; i<cards.length; i++){
      this.discards.push(cards[i]);
    }
  }

//Note: this shuffle function is based on one I found on StackOverflow
//http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
  this.shuffle = function(){
    var j, x, i;
    this.active.concat(this.discard);
    this.discard = [];
    var a = this.active;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  }
}

function Card(suit,value){
  this.suit = suit;
  this.value = value;
}


function Player(name, isAI, initialBanked,deckObject) //jack 11 (10), queen 12 (10), king 13 (10), Ace 1 (1 or 11)
//name is a string representing the current player's name
//isAI is a boolean representing  if the player is autonomous or must wait for user operations
//initialBanked is the initial amount (valid input checked) of money player starts with
//deckObject is used by AI to draw from the deck
{
	var theDeck = deckObject;

	if(name == "HeavyRain") //easter egg
	{
		this.name = "Shawn! SHAAAAAAAAAAAAAWN!";
	}
	else if((name == null) || (name == "")) //fixes bad inputs
	{
		this.name = "New Player";
	}
	else //otw, player input valid, so given
	{
		this.name = name; //player name will determined by the html component of gui
	} //player name will determined by the html component of gui


	this.isAI = isAI;
	this.busted = false; // track if player over 21 or not
	this.cardVals = []; //stores the values on the list
	this.cardSuites = [];

	this.cards = []; //stores all cards player has (to replace cardVals and cardSuites)

	this.endValue = this.cardVals[0] + this.cardVals[1]; //tracks player's current score?????
	if(initialBanked > 0) //validates banked input
	{
		this.banked = initialBanked;
	}
	else
	{
		this.banked = 100;
	}

	//output: numerical sum of point values for each card in player's hand (found through logic applied to cards)
	this.getTotalAmount = function()
	{
		var acesCount = 0; //aces are handled afterwards in program logic, so store aces during for loop
		var cardTotal = 0; //running point total to return at end of method
		for(var i = 0; i < this.cards.length; i++) //collect all cards from player, treat aces later
		{
			if((this.cards[i] >= 2) && (this.cards[i] <= 10)) //ace is worth either 1 or l1, and JQK are worth 10
			{
				cardTotal += this.cards[i].value;
			}
			else if(this.cards[i] == 1) //if ace card
			{
				acesCount ++;
			}
			else //otw, must be JQK, worth 10
			{
				cardTotal += 10;
			}
		}
		//after running thru hand,
		while(acesCount > 0) //check if most ideal to add ace as 1 or as 10
		{
			if((cardTotal + acesCount + 10) < 21) //if user can use ace as 10 without going over
			{
				cardTotal += 11;
				acesCount --;
			}
			else //otw, best case (even in defeat) would be as 1
			{
				cardTotal ++;
				acesCount --;
			}
		}
		//now, after resolving every card in hand,
		return cardTotal; //tell how much value player has
	}

	//input: a Card object or null
	//if a valid Card is given, adds to player's array
	this.givePlayerCard = function(theCard)
	{
		if(theCard != null) //checks if user is supplying something
		{
			if(theCard.suite != null) //checks if user is supplying a card
			{
				this.cards.push(theCard); //if so, add the card
			}
		}
	}

	//output: a list of Cards
	//this method is here for safety sake - ie the single vs double = typo
	this.getPlayerHand = function()
	{
		return this.cards;
	}

	//output: True/False to "has the user run out of cards?"
	//if one exists, removes the first card from the player's hand, this would be a clean-up method
	this.removeFirstCard = function() //returns false when it removed a card
	{
		if(this.cards.length > 0)
		{
			this.cards.pop();
			return false;
		}
		else //otw, user all out of cards
		{
			return true;
		}
	}

	this.getPlayerHandValues = function() //to be deleted
	{
		return this.cardVals;
	}
	this.getPlayerHandSuites = function() //to be deleted
	{
		return this.cardSuites;
	}

	//input: an index to poll
	//output: the Card at that index, or null if none exists
	//returns information about a card somewhere in the player's hand
	this.getPlayerCard = function(indexVal)
	{
		if(indexVal < this.cards.length)
		{
			return this.cards[indexVal];
		}
		else
		{
			return null;
		}
	}

	//input: a postive integer amount
	//if valid, adds amount to player's banked
	this.givePlayerMoney = function(amount)
	{
		if(amount > 0)
		{
			this.banked += amount;
		}
	}

	//output: returns how much money player has banked
	this.getBanked = function()
	{
		return this.banked;
	}

	//input: a positive integer amount
	//output: True or False answering "Is the player out of money?"
	//after validating input, deducts amount from player's banked amount
	//NOTE: this will later be changed into, or incorporated into a this.Bet method
	this.takePlayerMoney = function(amount)
	{
		if((amount > 0) && (amount <= this.banked))
		{
			this.banked -= amount;
			if(this.banked <= 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}

	//-----------------------------------------------------AI logic definitions---------------------------------------


	//								*A note on Game logic* - I think the game is supposed to determine if player goes over limit
	if(this.isAI == "Pro")
	{
		this.playTurn = function()
		{
			var continueTurn = true;
			var card = "";
			var endValue = this.getTotalAmount();

			while(continueTurn)
			{
				if(endValue >= 22)
				{
					continueTurn = false;
					this.busted = true;
				}
				else if(theDeck.lookAtCard().value + endValue < 22)
				{
					card = theDeck.drawCard(1);
					//this.endValue += card.value;

					this.givePlayerCard(card);
					//this.cardVals.push(card.value);
					//this.cardSuites.push(card.suite);
				}
				else
				{
					continueTurn = false;
				}
			}
		}
	}
	else if(this.isAI == "Noob")
	{
		this.playTurn = function()
		{
			var continueTurn = true;
			var card = "";
			var endValue = this.getTotalAmount();

			while(continueTurn)
			{
				if(endValue >= 22)
				{
					continueTurn = false;
					this.busted = true;
				}
				else if(theDeck.lookAtCard().value + endValue >= 22)
				{
					card = theDeck.drawCard(1);
					//this.endValue += card.value;
					this.givePlayerCard(card);

					//this.cardVals.push(card.value);
					//this.cardSuites.push(card.suite);
				}
				else
				{
					continueTurn = false;
				}
			}
		}
	}
	else if(this.isAI == "Dealer Wannabe")
	{
		this.playTurn = function()
		{
			var card = "";
			var endValue = this.getTotalAmount();

			while(this.endValue < 17)
			{
				card = theDeck.drawCard(1);
				//this.endValue += card.value;
				this.givePlayerCard(card);

				//this.cardVals.push(card.value);
				//this.cardSuites.push(card.suite);
			}

			if(endValue >= 22)
			{
				this.busted = true;
			}
		}
	}
	else if(this.isAI == "Random Guy")
	{
		this.playTurn = function()
		{
			var card = "";

			var continueTurn = Math.floor((Math.random() * 2) + 1);

			while(continueTurn == 1)
			{
				card = theDeck.drawCard(1);
				//this.endValue += card.value;
				this.givePlayerCard(card);

				//this.cardVals.push(card.value);
				//this.cardSuites.push(card.suite);

				continueTurn = Math.floor((Math.random() * 2) + 1);

				if(endValue >= 22)
				{
					continueTurn = 2;
					this.busted = true;
				}
			}
		}
	}
}

var game = new blackjackGame();

for(var i = 0; i < game.players.length; i++)
{
	Output(game.players[i].name);
}
