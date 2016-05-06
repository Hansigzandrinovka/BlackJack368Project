



function Player (name, AIType, initialBanked) //jack 11 (10), queen 12 (10), king 13 (10), Ace 1 (1 or 11)
//name is a string representing the current player's name
//isAI is a boolean representing  if the player is autonomous or must wait for user operations
{
	//upon being created, the new player tries to draw cards from the Deck to use
	//var firstDrawnCard = Deck.drawCard(); //assume a card is an object with a value and a suite
	//var secondDrawnCard = Deck.drawCard();
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
	}
	
	this.AIType = AIType; //if AIType is null, the game will treat it as not an AI
	
	//output: True or False concerning "Is this player an AI?"
	this.isAI = function()
	{
		if(this.AIType == null)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	
	this.cards = []; //stores all cards player has
	
	if(initialBanked > 0) //if user supplied valid input for initialBanked, use it, else default to 100
	//by the magical power of javascript, I believe "hello" > 0 would return false
	{
		this.banked = initialBanked;
	}
	else
	{
		this.banked = 100;
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
	
	//input: a Card list
	//adds the Card list to the player's Card list
	this.givePlayerCardsArray = function(cardArray) //gives the player a list of cards rather than a single card
	{
		var trackCardArray = cardArray;
		while(trackCardArray.length > 0)
		{
			this.givePlayerCard(trackCardArray[0]); //for safety sake, all cards taken in are invalid until proven valid
			trackCardArray.pop();
		}
	}
	
	//output: numerical sum of point values for each card in player's hand (found through logic applied to cards)
	this.getTotalAmount = function()
	{
		var acesCount = 0; //aces are handled afterwards in program logic, so store aces during for loop
		var cardTotal = 0; //running point total to return at end of method
		for(var i = 0; i < this.cards.length; i++) //collect all cards from player, treat aces later
		{
			if((this.cards[i].value >= 2) && (this.cards[i].value <= 10)) //ace is worth either 1 or l1, and JQK are worth 10
			{
				cardTotal += this.cards[i].value;
			}
			else if(this.cards[i].value == 1) //if ace card
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
	
	//output: True/False to "has the user run out of cards?"
	//if one exists, removes the first card from the player's hand, this would be a cleanup method
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
	
	//output: a list of Cards
	//this method is here for safety sake - ie the single vs double = typo
	this.getPlayerHand = function()
	{
		return this.cards;
	}
	
	//input: an index to poll
	//output: the Card at that index, or null if none exists
	//returns information about a card somewhere in the player's hand
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
	
	//input: a postive integer amount
	//if valid, adds amount to player's banked
	this.givePlayerMoney = function(amount)
	{
		if(amount > 0)
		{
			this.banked += amount;
		}
	}
	
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
}

//-------------------tests-----------------------------------------------------------------------------
//try to add empty card to player hand
var Playa1 = new Player ("Mister Anderson",null,500); //this would be how you add a player to the game
Playa1.givePlayerCard(5);
var aCard = {};
aCard.value = 5;
aCard.suite = "Spades";
Playa1.givePlayerCard(aCard);
Output("Card List " + Playa1.cards.length);
if("hello" > 0)
{
	Output("WUT??");
}
else
{
	Output("Ha! Hello is not greater than 0");
}


//interface logic, instead of game logic going thru each interface step, abstract it so interface has general refresh method that draws entire page, implementation details
