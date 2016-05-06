function blackjackGame(){
	this.deck = new Deck();
	
	this.initPlayers = function(name){
    var players = [];
    players.push(new Player("AI1","Noob",10000,this.deck));
    players.push(new Player("AI2","Pro",10000,this.deck));
    players.push(new Player("AI3","Dealer Wannabe",10000,this.deck));
    players.push(new Player("AI4","Random Guy",10000,this.deck));
    players.push(new Player(name,null,10000,this.deck));
	  
    return players;
  }
  this.players = this.initPlayers();
  
  this.startGame = function(name){
  }
}

function Deck(){
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
	
	this.active = [];
	
	this.initDeck = function(){
    for(var i=0; i<4; i++){
      for(var j=1; j<=13; j++){
        this.active.push(new Card("spade",i));
        this.active.push(new Card("heart",i));
        this.active.push(new Card("diamond",i));
        this.active.push(new Card("club",i));
      }
    }
    this.shuffle();
    
    return this.active;
  }
	
  this.active = this.initDeck();

  
  this.discard = [];

  this.drawCard = function(num){
    return this.active.splice(0,num);
  }
  
  this.lookAtCard = function(){
    return this.active.peek();
  }

  this.returnCards = function(cards){
    for(var i=0; i<cards.length; i++){
      this.discard.push(cards[i]);
    }
  }

//Note: this shuffle function is based on one I found on StackOverflow
//http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
  


}

function Card(suit,value){
  this.suit = suit;
  this.value = value;
}

function Player(name, isAI, initialBanked,deckObject) //jack 11 (10), queen 12 (10), king 13 (10), Ace 1 (1 or 11)
//name is a string representing the current player's name
//isAI is a boolean representing  if the player is autonomous or must wait for user operations
{
	var theDeck = deckObject;
	
	//upon being created, the new player tries to draw cards from the Deck to use
	var firstDrawnCard = theDeck.drawCard(1); //assumed returns [int,str] where int is value (1 thru 13), and str is suite ("Spade","Heart","Club","Diamond")
	var secondDrawnCard = theDeck.drawCard(1);
	this.name = name; //player name will determined by the html component of gui
	this.isAI = isAI;
	this.cardVals = [firstDrawnCard.value, secondDrawnCard.value]; //stores the values on the list
	this.cardSuites = [firstDrawnCard.suite,secondDrawnCard.suite];
	this.endValue = this.cardVals[0] + this.cardVals[1];
	if(initialBanked > 0)
	{
		this.banked = initialBanked;
	}
	else
	{
		this.banked = 100;
	}
	
	
	this.getTotalAmount = function()
	{
		var cardTotal = 0;
		for(var i = 0; i < this.cards.length; i++)
		{
			if((this.cards[i] >= 2) && (this.cards[i] <= 10)) //ace is worth 11 if current value less than 21, otherwise worth 1
			{
				cardTotal += this.cards[i].value;
			}
			
		}
	}
	this.removeFirstCard = function() //returns false when it removed a card
	{
		if(this.cardVals.length > 0)
		{
			this.cardVals.pop();
			this.cardSuites.pop();
			return false;
		}
		else //otw, user all out of cards 
		{
			return true;
		}
	}
	this.getPlayerHandValues = function()
	{
		return this.cardVals;
	}
	this.getPlayerHandSuites = function()
	{
		return this.cardSuites;
	}
	
	this.getPlayerCard = function(indexVal)
	{
		if(indexVal < this.cardVals.length)
		{
			return [this.cardVals[indexVal],this.cardSuites[indexVal]];
		}
		else
		{
			return null;
		}
	}
	
	if(this.isAI == "Pro")
	{
		this.playTurn = function()
		{
			var continueTurn = true;
			var card = "";
			
			while(continueTurn)
			{
				if(theDeck.lookAtCard().value + endValue < 22)
				{
					card = theDeck.drawCard(1);
					this.endValue += card.value;
					this.cardVals.push(card.value);
					this.cardSuites.push(card.suite);
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
			
			while(continueTurn)
			{
				if(theDeck.lookAtCard().value + endValue >= 22)
				{
					card = theDeck.drawCard(1);
					this.endValue += card.value;
					this.cardVals.push(card.value);
					this.cardSuites.push(card.suite);
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
		
			while(this.endValue < 17)
			{
				card = theDeck.drawCard(1);
				this.endValue += card.value;
				this.cardVals.push(card.value);
				this.cardSuites.push(card.suite);
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
				this.endValue += card.value;
				this.cardVals.push(card.value);
				this.cardSuites.push(card.suite);
				
				continueTurn = Math.floor((Math.random() * 2) + 1); 
			}
		}
	}
}

var game = new blackjackGame();

for(var i = 0; i < game.players.length; i++)
{
	Output(game.players[i].name);
}