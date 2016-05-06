function blackjackGame(){ //game gets initialized when you create a blackjack game
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

  this.deck = new Deck();
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
    var winners = this.getWinners();
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

  this.discard = [];

  this.drawCards = function(num){
    return this.active.splice(0,num);
  }

  this.returnCards = function(cards){ //returns cards to discard pile
    for(var i=0; i<cards.length; i++){
      this.discard.push(cards[i]);
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
