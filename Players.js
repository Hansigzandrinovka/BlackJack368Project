//interface logic, instead of game logic going thru each interface step, abstract it so interface has general refresh method that draws entire page, implementation details



var Playa1 = new thePlayer ("Mister Anderson");

//Pre-Round


//Space for player turn method


var thePlayer = new function (name, isAI, initialBanked) //jack 11 (10), queen 12 (10), king 13 (10), Ace 1 (1 or 11)
//name is a string representing the current player's name
//isAI is a boolean representing  if the player is autonomous or must wait for user operations
{
	//upon being created, the new player tries to draw cards from the Deck to use
	var firstDrawnCard = Deck.drawCard(); //assumed returns [int,str] where int is value (1 thru 13), and str is suite ("Spade","Heart","Club","Diamond")
	var secondDrawnCard = Deck.drawCard();
	this.name = name; //player name will determined by the html component of gui
	this.cardVals = [firstDrawnCard[0], secondDrawnCard[0]]; //stores the values on the list
	this.cardSuites = [firstDrawnCard[1],secondDrawnCard[1]];
	this.endValue = this.cards[0].value + this.cards[1].value;
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
			if((this.cards[i] >= 2) && (this.cards[i] <= 10) //ace is worth 11 if current value less than 21, otherwise worth 1
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
}