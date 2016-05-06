function blackjackGame(){
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

  this.startGame = function(name){
    this.resetGame();
    this.dealCards();
    this.getBets();
    this.playTurns();
    this.resolveGame();
  }

  this.resetGame = function(){
    this.resetPlayers();
    this.pot = 0;
    this.refreshScreen(this.players, this.pot, "Let's begin.");
  }

  this.dealCards = function(){
    for(var i=0; i<this.players.length; i++){
      this.players[i].addCards(this.deck.drawCards(2));
      this.refreshScreen(this.players);
    }
  }

  this.resetPlayers = function(){
    for(var i=0; i<this.players.length; i++){
      this.players[i].reset();
    }
  }

  this.getBets = function(){
    var bet = 0;
    for(var i=0; i<this.players.length; i++){
      this.pot += this.players[i].getBet(); //player object should update its bankroll
      this.refreshScreen(this.players, this.pot);
    }
  }

  this.playTurns(){
    for(var i=0; i<this.players.length; i++){
      var move = [];
      while(this.players[i].busted = false && this.players[i].myTurn = true){
        move = this.players[i].getMove();
        if(move == 'stand'){
          this.players[i].myTurn = false;
        }
        else if(move == 'hit'){
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

  this.getWinners = function(){
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

  this.refreshScreen = function(players, message = ""){
    setTimeout(function(){},2000); //maybe?
    //Call's to Alex's functions here
  }
}

function Deck(){
  this.active = this.initDeck();

  this.initDeck = function(){
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

  this.returnCards = function(cards){
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
