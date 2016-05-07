////// Interface code

var cards = [
        "Cards/ace_of_clubs.png",
        "Cards/2_of_clubs.png",
        "Cards/3_of_clubs.png",
        "Cards/4_of_clubs.png",
        "Cards/5_of_clubs.png",
        "Cards/6_of_clubs.png",
        "Cards/7_of_clubs.png",
        "Cards/8_of_clubs.png",
        "Cards/9_of_clubs.png",
        "Cards/10_of_clubs.png",
        "Cards/jack_of_clubs.png",
        "Cards/queen_of_clubs.png",
        "Cards/king_of_clubs.png",
        "Cards/ace_of_hearts.png",
        "Cards/2_of_hearts.png",
        "Cards/3_of_hearts.png",
        "Cards/4_of_hearts.png",
        "Cards/5_of_hearts.png",
        "Cards/6_of_hearts.png",
        "Cards/7_of_hearts.png",
        "Cards/8_of_hearts.png",
        "Cards/9_of_hearts.png",
        "Cards/10_of_hearts.png",
        "Cards/jack_of_hearts.png",
        "Cards/queen_of_hearts.png",
        "Cards/king_of_hearts.png",
        "Cards/ace_of_diamonds.png",
        "Cards/2_of_diamonds.png",
        "Cards/3_of_diamonds.png",
        "Cards/4_of_diamonds.png",
        "Cards/5_of_diamonds.png",
        "Cards/6_of_diamonds.png",
        "Cards/7_of_diamonds.png",
        "Cards/8_of_diamonds.png",
        "Cards/9_of_diamonds.png",
        "Cards/9_of_diamonds.png",
        "Cards/jack_of_diamonds.png",
        "Cards/queen_of_diamonds.png",
        "Cards/king_of_diamonds.png",
        "Cards/ace_of_spades.png",
        "Cards/2_of_spades.png",
        "Cards/3_of_spades.png",
        "Cards/4_of_spades.png",
        "Cards/5_of_spades.png",
        "Cards/6_of_spades.png",
        "Cards/7_of_spades.png",
        "Cards/8_of_spades.png",
        "Cards/9_of_spades.png",
        "Cards/10_of_spades.png",
        "Cards/jack_of_spades.png",
        "Cards/queen_of_spades.png",
        "Cards/king_of_spades.png",
        "Cards/card_back.png"
      ];

function getCard(num,suit){

  if(num == 0){ return cards[52];}
  else if(suit == "spade"){

    if(num == 1){return cards[39];}
    else if(num == 2){return cards[40];}
    else if(num == 3){return cards[41];}
    else if(num == 4){return cards[42];}
    else if(num == 5){return cards[43];}
    else if(num == 6){return cards[44];}
    else if(num == 7){return cards[45];}
    else if(num == 8){return cards[46];}
    else if(num == 9){return cards[47];}
    else if(num == 10){return cards[48];}
    else if(num == 11){return cards[49];}
    else if(num == 12){return cards[50];}
    else if(num == 13){return cards[51];}

  }

  else if(suit == "club"){

    if(num == 1){return cards[0];}
    else if(num == 2){return cards[1];}
    else if(num == 3){return cards[2];}
    else if(num == 4){return cards[3];}
    else if(num == 5){return cards[4];}
    else if(num == 6){return cards[5];}
    else if(num == 7){return cards[6];}
    else if(num == 8){return cards[7];}
    else if(num == 9){return cards[8];}
    else if(num == 10){return cards[9];}
    else if(num == 11){return cards[10];}
    else if(num == 12){return cards[11];}
    else if(num == 13){return cards[12];}

  }

  else if(suit == "heart"){

    if(num == 1){return cards[13];}
    else if(num == 2){return cards[14];}
    else if(num == 3){return cards[15];}
    else if(num == 4){return cards[16];}
    else if(num == 5){return cards[17];}
    else if(num == 6){return cards[18];}
    else if(num == 7){return cards[19];}
    else if(num == 8){return cards[20];}
    else if(num == 9){return cards[21];}
    else if(num == 10){return cards[22];}
    else if(num == 11){return cards[23];}
    else if(num == 12){return cards[24];}
    else if(num == 13){return cards[25];}

  }
  else if(suit == "diamond"){

    if(num == 1){return cards[26];}
    else if(num == 2){return cards[27];}
    else if(num == 3){return cards[28];}
    else if(num == 4){return cards[29];}
    else if(num == 5){return cards[30];}
    else if(num == 6){return cards[31];}
    else if(num == 7){return cards[32];}
    else if(num == 8){return cards[33];}
    else if(num == 9){return cards[34];}
    else if(num == 10){return cards[35];}
    else if(num == 11){return cards[36];}
    else if(num == 12){return cards[37];}
    else if(num == 13){return cards[38];}

  }
}

var num = 0;

$( document ).ready(function() {

      startScreen();
      var game = new blackjackGame();
      
      

      $('#HitMe').click(function(e){
        e.preventDefault();
        game.makeMove('hit'); //or 'stand'
		  game.playAITurns();

      });

      $('#Stay').click(function(e){
        e.preventDefault();

        setButtons("bet");

      });
      
      
       $('#BetButton').click(function(e){
        e.preventDefault();

		  
		  game.setPlayerBet(num);
		  game.getAIBets();

      });
      
      
      
      
      $('#nameButton').click(function(e){
        e.preventDefault();

   		$('h3').css('visibility', 'visible');
   		
   		$('#nameInputLine').css('visibility', 'hidden');
   		      	
	        			
			var players = [["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck],["JimBob",null,10000,game.deck],["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck]];
			
			game.initGame(players);
			
			refreshScreen(game.players,0,'Welcome To BlackJack!',false,"none");
			
			game.getAIBets();

      });


      //$('#Stay').click(function(e){}
  });



  function addCard(num,suit,player,numCard,showCards){

      var cardUrl = getCard(num,suit);

      var image = "";

      if(!showCards){

        if(numCard == 0 ){

          image = "<img src='" + cardUrl + "' width='70' height='105' border='2'>";
        }
        else{
          image = "<img src='Cards/card_back.png' width='70' height='105' border='2'>";
        }

      } else{

        image = "<img src='" + cardUrl + "' width='70' height='105' border='2'>";
      }


      if(player == "player3"){ //bottom player

          $('#human_player').append(image);

          if(numCard != 0 && !showCards){
            $('#human_player').find("img").last().attr("onmouseover","this.src = '" + cardUrl + "'");
            $('#human_player').find("img").last().attr("onmouseout","this.src = 'Cards/card_back.png'");
          }
        }
      else if(player == "player1"){

            $('#computer1').append(image);
      }
      else if(player == "player5"){

          $('#computer2').append(image);
      }
      else if(player == "player2"){

          $('#computer3').append(image);
      }
      else if(player == "player4"){

          $('#computer4').append(image);
      }
  }

  function clearBoard(){ //clears the board of all cards


    $('#human_player').find('img').remove();
    $('#computer1').find('img').remove();
    $('#computer2').find('img').remove();
    $('#computer3').find('img').remove();
    $('#computer4').find('img').remove();
  }

  function changeMoney(player_id,amount){

    $('#money_'+player_id).find('span.money').html(": $" + amount.toString());
  }

  function setPlayerName(player_id,player_name){

    $('#money_'+player_id).find('span.name').html(player_name);
  }

  function setBusted(player_id,isThePlayerBusted){

    if(isThePlayerBusted){

      $('#money_'+player_id).find('span.busted').html("  Busted!");
    }
    else{
      $('#money_'+player_id).find('span.busted').html("");
    }
  }

  function changeMessage(message){

    $('#Message').html(message);

  }

  function changePot(amount){

    $('#money-pot').html('Pot: $' + amount.toString());
  }

  function setButtons(whatToShow){

    if(whatToShow == "bet"){

      $('#HitMe').css('visibility', 'hidden');
      $('#Stay').css('visibility', 'hidden');

      $('#BetButton').css('visibility', 'visible');
      $('#dollarSign').css('visibility', 'visible');
      $('#BetAmount').css('visibility', 'visible');

    }
    else if(whatToShow == "play"){

      $('#BetAmount').css('visibility', 'hidden');
      $('#BetButton').css('visibility', 'hidden');
      $('#dollarSign').css('visibility', 'hidden');

      $('#HitMe').css('visibility', 'visible');
      $('#Stay').css('visibility', 'visible');
    }
    else if(whatToShow == "none"){

      $('button').css('visibility', 'hidden');
      $('#dollarSign').css('visibility', 'hidden');
      $('#BetAmount').css('visibility', 'hidden');
    }
    else if(whatToShow == "all"){

      $('button').css('visibility', 'visible');
      $('#dollarSign').css('visibility', 'visible');
      $('#BetAmount').css('visibility', 'visible');
    }
    else if(whatToShow == "start"){
    
    	setButtons("none");
		$('#nameButton').css('visibility', 'visible');
      $('#nameInputLine').css('visibility', 'visible');
      $('h3').css('visibility', 'hidden');    	
    	
    }


  }
  
  
  function startScreen(){
  
		var playerEmpty =
		{
			name: "",
			bet: 0,
			busted: false,
			cards: []
		};  		
  		refreshScreen([playerEmpty, playerEmpty, playerEmpty, playerEmpty, playerEmpty],0,'',false,"start");
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////


var player1 =
{
name: "Noob",
bet: 400,
busted: false,
cards: [
{
 suit: 'heart',
 value: 4 //1 is ace, 11 is jack, etc
},
{
 suit: 'heart',
 value: 8
}
]
};

var player2 =
{
name: "Noob",
bet: 400,
busted: false,
cards: [
{
 suit: 'spade',
 value: 7 //1 is ace, 11 is jack, etc
},
{
 suit: 'diamond',
 value: 13
}
]
};
var player3 =
{
name: "Noob",
bet: 400,
busted: false,
cards: [
{
 suit: 'spade',
 value: 7 //1 is ace, 11 is jack, etc
},
{
 suit: 'diamond',
 value: 13
},
{
 suit: 'spade',
 value: 12
}
]
};
var player4 =
{
name: "Bob",
bet: 400,
busted: false,
cards: [
{
 suit: 'spade',
 value: 7 //1 is ace, 11 is jack, etc
},
{
 suit: 'diamond',
 value: 13
},
{
 suit: 'diamond',
 value: 13
}
]
};
var player5 =
{
name: "Noob",
bet: 400,
busted: false,
cards: [
{
 suit: 'spade',
 value: 7 //1 is ace, 11 is jack, etc
},
{
 suit: 'diamond',
 value: 13
}
]
};






//////////////////////////////////////////////////////////////////////////////////////////////////////
  function refreshScreen(playerArray,pot,console_message,showCards,buttonsToShow){

    if(typeof console_message === 'undefined' || console_message==null){changeMessage("");}
    else{changeMessage(console_message);}

    clearBoard();

    changePot(pot);

    setButtons(buttonsToShow);

    for(var i =0;i<5;i++){

      var player_id = "player" + (i+1).toString();

      changeMoney(player_id,playerArray[i].bet);
      setPlayerName(player_id,playerArray[i].name);
      setBusted(player_id,playerArray[i].busted);

      for(var j=0; j<playerArray[i].cards.length;j++){

        addCard(playerArray[i].cards[j].value , playerArray[i].cards[j].suit , player_id,j,showCards)

      }

    }

  }

////// Game logic

function blackjackGame(){ //game gets initialized when you create a blackjack game
  this.deck = new Deck();
  this.players = [];
  this.refreshDelay = 2000;

  this.initGame = function(playerDefs){
    //playerDefs example: [[name,type,initialBanked],[name,type,initialBanked], etc]
    //exactly 5 players are required
    this.initPlayers(playerDefs);
    this.deck.initDeck();
  };

  this.initPlayers = function(playerDefs){
    for(var i=0; i<playerDefs.length; i++){
      this.players.push(new Player(playerDefs[i][0],playerDefs[i][0],playerDefs[i][0]));
    }
    // players.push(new Player("AI1","Noob",10000));
    // players.push(new Player("AI1","Noob",10000));
    // players.push(new Player("AI1","Noob",10000));
    // players.push(new Player("AI1","Noob",10000));
    // players.push(new Player(name,null,10000));
  };

  this.pot = 0;

  this.startGame = function(name){ //called when player clicks start button - every time game , it asks player to keep playing, which calls startGame method
    this.resetGame();
    this.dealCards();
    this.getBets();
    this.playTurns();
    this.resolveGame();
  };

  this.resetGame = function(){ //prepare game for next round - every time game ends, game is reset
    this.resetPlayers();
    this.pot = 0;
    setTimeout(this.refreshScreen(this.players, this.pot, "Let's begin."),this.refreshDelay);
  };

  this.dealCards = function(){ //at start of game, give each player 2 cards
    for(var i=0; i<this.players.length; i++){
      this.players[i].addCards(this.deck.drawCards(2));
      setTimeout(this.refreshScreen(this.players),this.refreshDelay);
    }
  };

  this.resetPlayers = function(){
    for(var i=0; i<this.players.length; i++){
      this.players[i].reset();  //each player needs a reset method that empties out player hand and resets bet stat to 0
    }
  };

  this.getAIBets = function(){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && !this.players[i].betPlaced){
        break;
      } else if(this.players[i].isAI && !this.players[i].betPlaced){
        this.pot += this.players[i].getBet();
        this.players[i].betPlaced = true;
        setTimeout(this.refreshScreen(this.players, this.pot, "", true, 'none'), this.refreshDelay);
      }
    }
    this.refreshScreen(this.players, this.pot, "", true, 'play');
    this.playAITurns();
  }

  this.setPlayerBet = function(bet){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && !this.players[i].betPlaced){
        this.pot += bet;
        this.players[i].decreasePlayerMoney(bet); //not sure what Hans' method is
        this.players[i].betPlaced = true;
        setTimeout(this.refreshScreen(this.players, this.pot, "", true, 'none'), this.refreshDelay);
        break;
      }
    }
  }

  this.playAITurns = function(){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && this.players[i].turnPlayed === "false"){
        this.players[i].turnPlayed = "inprogress"
        break;
      } else if(this.players[i].isAI && this.players[i].turnPlayed === "false"){
        var move = [];
        while(this.players[i].busted === false && this.players[i].turnPlayed === "inprogress"){
          move = this.players[i].getMove(); //it is player's turn - will he hit or stand? - for AI, getMove() returns current AI action
          if(move == 'stand'){ //player waits for round to end
            this.players[i].turnPlayed = "finished";

          }
          else if(move == 'hit'){ //player gets another card
            this.players[i].addCards(this.deck.drawCards(1));
            var amount = this.players[i].getTotalAmount();
            if(amount > 21){
              this.players[i].busted = true;
              this.players[i].turnPlayed = "finished";
            }
          }
          setTimeout(this.refreshScreen(this.players, this.pot, "", true, 'none'), this.refreshDelay);
        }
      }
    }
    this.refreshScreen(this.players, this.pot, "", true, 'none');
    this.resolveGame();
  }

  this.makeMove = function(move){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && this.players[i].turnPlayed === "inprogress"){
        if(move == 'stand'){ //player waits for round to end
          this.players[i].turnPlayed = "finished";
        }
        else if(move == 'hit'){ //player gets another card
          this.players[i].addCards(this.deck.drawCards(1));
          var amount = this.players[i].getTotalAmount();
          if(amount > 21){
            this.players[i].busted = true;
            this.players[i].turnPlayed = "finished";
          }
        }

        if(this.players[i].turnPlayed === "finished"){
          setTimeout(this.refreshScreen(this.players),this.refreshDelay);
          this.playAITurns();
        }
        break;
      }

    }
    this.refreshScreen(this.players, this.pot, "", true, 'none');
    this.resolveGame();
  }

  // this.getBets = function(){ //polls all players for the amount they want to bet for this game, taking the money from the players
  //   var bet = 0;
  //   for(var i=0; i<this.players.length; i++){
  //     this.pot += this.players[i].getBet(); //player object should update its bankroll
  //     this.refreshScreen(this.players, this.pot);
  //   }
  // };

  // this.playTurns = function(){
  //   for(var i=0; i<this.players.length; i++){
  //     var move = [];
  //     while(this.players[i].busted === false && this.players[i].myTurn === true){
  //       move = this.players[i].getMove(); //it is player's turn - will he hit or stand? - for AI, getMove() returns current AI action
  //       if(move == 'stand'){ //player waits for round to end
  //         this.players[i].myTurn = false;
  //       }
  //       else if(move == 'hit'){ //player gets another card
  //         this.players[i].addCards(this.deck.drawCards(1));
  //         var amount = this.players[i].getTotalAmount();
  //         if(amount > 21){
  //           this.players[i].busted = true;
  //           this.players[i].myTurn = false;
  //         }
  //       }
  //       else {
  //         //do nothing for now
  //       }
  //       this.refreshScreen(this.players);
  //     }
  //   }
  // };

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

    if(max === 0){
      //All players were busted, so everyone splits the pot
      return this.players;
    } else {
      return winners;
    }
  };

  this.resolveGame = function(){
    this.distributeWinnings(this.pot/winners.length, this.getWinners());
    this.collectDiscards();
  };

  this.collectDiscards = function(){
    var discards = [];
    for(var i=0; i<this.players.length; i++){
      discards.concat(this.players[i].returnCards());
    }
    this.deck.returnCards(discards);
  };

  this.distributeWinnings = function(amount, players){
    for(var i=0; i<this.players.length; i++){
      this.players[i].givePlayerMoney(amount);
    }
  };

  
}

function Deck(){
  this.active = [];

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
  };

  this.discards = [];

  this.drawCards = function(num){
    var top = this.active.splice(0,num);

    if(this.active.length < 52)
    {
    	this.active.concat(this.discards);
    	this.shuffle();
    }

    return top;
  };

  this.returnCards = function(cards){ //returns cards to discard pile
    for(var i=0; i<cards.length; i++){
      this.discards.push(cards[i]);
    }
  };

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
  };
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

	this.bet = 0; //tracks the amount player has bet
	if(name == "HeavyRain") //easter egg
	{
		this.name = "Shawn! SHAAAAAAAAAAAAAWN!";
	}
	else if((name === null) || (name === "")) //fixes bad inputs
	{
		this.name = "New Player";
	}
	else //otw, player input valid, so given
	{
		this.name = name; //player name will determined by the html component of gui
	} //player name will determined by the html component of gui


	this.isAI = isAI; //null for not AI
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

	this.GetBet = function() //returns bet amount that player set, 0ing it, deducting it from their bank
	{
		if(this.bet > this.banked) //player bets too much
		{
			this.bet = this.banked;
			this.banked = 0;
			return this.bet;
		}
		else
		{
			this.banked -= tis.bet;
			return this.bet;
		}
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
		if(theCard !== null) //checks if user is supplying something
		{
			if(theCard.suite !== null) //checks if user is supplying a card
			{
				this.cards.push(theCard); //if so, add the card
			}
		}
	};

	//output: a list of Cards
	//this method is here for safety sake - ie the single vs double = typo
	this.getPlayerHand = function()
	{
		return this.cards;
	};

	//output: The card at the top of the user's hand, or null if no card
	//if one exists, removes the first card from the player's hand and return it, this would be a clean-up method
	this.TakeFirstCard = function() //returns null when no card in deck
	{
		var theCard = null;
		if(this.cards.length > 0)
		{
			theCard = this.cards.pop();
		}
		return theCard;
	};

	this.getPlayerHandValues = function() //to be deleted
	{
		return this.cardVals;
	};
	this.getPlayerHandSuites = function() //to be deleted
	{
		return this.cardSuites;
	};

	this.reset = function() //destroy card array, reset bet to 0
	{
		this.bet = 0;
		this.cards = []; //Does NOT check if cards still in hand to return to deck
	};

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
	};

	//input: a postive integer amount
	//if valid, adds amount to player's banked
	this.givePlayerMoney = function(amount)
	{
		if(amount > 0)
		{
			this.banked += amount;
		}
	};

	//output: returns how much money player has banked
	this.getBanked = function()
	{
		return this.banked;
	};

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
	};

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
		};
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
		};
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
		};
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
		};
	}
}

/*
//// In 'Start Game' button
// get player name

var game = new blackjackGame();
game.initGame([["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck],["JimBob",null,10000,game.deck],["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck]]);
game.getAIBets();

//In Place Bet button
//Get player bet
//Will support multiplayer if we decide to implement
game.setPlayerBet(num);
game.getAIBets();

//In Hit button
game.makeMove('hit'); //or 'stand'
game.playAITurns();

/*
getAIBets method:
iterates through players, checks bet status
if hasn't bet and is AI, calls the getBet function
if isn't AI, but players are left, exits
if checks and finds that all players have bet, calls playAITurns

playAITurns method:
iterates through players, checks turn status
if hasn't played and is AI, plays out the AI turn
if isn't AI and hasn't played, exits
if checks all and all players have played, calls resolveGame

makeMove method:
iterates through players, checks turn status
if all players marked 'finished', call resolveGame
for first player with turn status 'inprogress', apply move, check if busted, mark accordingly. mark turn status 'finished' if busted, or if player stands
if turn status current player is 'inprogress', exit
if turn status current player just marked 'finished', call playAITurns

new player attributes (defaults followed by possible values):
this.betPlaced = false; //false or true
this.turnPlayed = "inprogress"; // "false", "inprogress", "finished"


// Tests

for(var i = 0; i < game.players.length; i++)
{
	console.log(game.players[i].name);
}

*/
