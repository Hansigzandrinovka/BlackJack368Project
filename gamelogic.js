function blackjackGame(){
  this.players = this.initPlayers()

  this.initPlayers = function(name){
    var players = [];
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
    players.push(new Player("AI1","Noob",10000));
  }

  this.deck = new Deck();

  this.startGame = function(name){

  }
}

function Deck(){
  this.active = this.initDeck();

  this.initDeck = function(){
    for(var i=0; i<4; i++){
      for(var j=1; j<=13; j++){
        this.active.push(new Card(spade,i));
        this.active.push(new Card(heart,i));
        this.active.push(new Card(diamond,i));
        this.active.push(new Card(club,i));
      }
    }
    this.shuffle();
  }
  this.discard = [];

  this.drawCard = function(num){
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
