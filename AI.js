var AI1 = new AI ("Pro", deck.unshift(), deck.unshift());
var AI2 = new AI ("Noob", deck.unshift(), deck.unshift());
var AI3 = new AI ("Dealer Wannabe", deck.unshift(), deck.unshift());
var AI4 = new AI ("Random Guy", deck.unshift(), deck.unshift());

//Pre-Round
AI1.pot-=100;
AI2.pot-=100;
AI3.pot-=100;
AI4.pot-=100;

var pot = 400;

AI1.playTurn();
AI2.playTurn();
//Space for player turn method
AI3.playTurn();
AI4.playTurn();

var AI = new function (name, card1, card2)
{
	this.name = name;
	this.cards = [cards1, card2];
	this.endValue = card1.value + card2.value;
	this.pot = 500;
	
	if(this.name == "Pro")
	{
		this.playTurn = function()
		{
			var continueTurn = true;
			var card = "";
			
			while(continueTurn)
			{
				if(deck.peek().value + endValue < 22)
				{
					card = deck.unshift();
					this.endValue += card.value;
					this.cards.push(card);
				}
				else
				{
					continueTurn = false;
				}
			}
		}
	}
	else if(this.name == "Noob")
	{
		this.playTurn = function()
		{
			var continueTurn = true;
			var card = "";
			
			while(continueTurn)
			{
				if(deck.peek().value + endValue >= 22)
				{
					card = deck.unshift();
					this.endValue += card.value;
					this.cards.push(card);
				}
				else
				{
					continueTurn = false;
				}
			}
		}
	}
	else if(this.name == "Dealer Wannabe")
	{
		this.playTurn = funciton()
		{
			var card = "";
		
			while(this.endValue < 17)
			{
				card = deck.unshift();
				this.endValue += card.value;
				this.cards.push(card);
			}
		}
	}
	else if(this.name == "Random Guy")
	{
		this.playTurn = function()
		{
			var card = "";
		
			var continueTurn = Math.floor((Math.random() * 2) + 1); 
			
			while(continueTurn == 1)
			{
				card = deck.unshift();
				this.endValue += card.value;
				this.cards.push(card);
				
				continueTurn = Math.floor((Math.random() * 2) + 1); 
			}
		}
	}
}