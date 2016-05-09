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
      game.deck.initDeck();

      $('#HitMe').click(function(e){
        e.preventDefault();

        game.makeMove('hit'); //or 'stand'
      });

      $('#Stay').click(function(e){
        e.preventDefault();

        //setButtons("bet");
        game.makeMove('stand');
      });


      $('#BetButton').click(function(e){
        e.preventDefault();

  		  game.setPlayerBet(num);
      });

      $('#nameButton').click(function(e){

        e.preventDefault();

     		$('h3').css('visibility', 'visible');

     		$('#nameInputLine').css('visibility', 'hidden');

  			var player_name = getPlayerName();

  			var players = [["AI1","Pro",10000,game.deck],["AI2","Noob",10000,game.deck],[player_name,null,10000,game.deck],["AI3","Random Guy",10000,game.deck],["AI4","Dealer Wannabe",10000,game.deck]];

  			game.initGame(players);
        game.startGame();
      });
      
      $('#quit').click(function(e){
        e.preventDefault();

        
      });
      
      $('#continue').click(function(e){
        e.preventDefault();

        $('h3').css('visibility', 'visible');
		  $('#continue').css('visibility', 'hidden');
		  $('#quit').css('visibility', 'hidden');
      });
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
    else if(whatToShow == "continue"){
    
		setButtons("none");
		$('h3').css('visibility', 'hidden');
		$('#continue').css('visibility', 'visible');
		$('#quit').css('visibility', 'visible');    
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
    var playerEmpties = [playerEmpty, playerEmpty, playerEmpty, playerEmpty, playerEmpty];
		addRefresh({
        playerArray:playerEmpties,
        pot:0,
        console_message:"",
        showCards:false,
        buttonsToShow:"start"
    });
  }

	function getPlayerBet(){

  		var bet = $('#BetAmount').val();
  		$('#BetAmount').val(0);

  		return bet;
	}

	function getPlayerName(){
		var player_name = $('#nameInput').val();
  	$('#nameInput').val("");
  	return player_name;
	}

  var refreshQueue = [];

  var refreshTimer = setInterval(processRefreshQueue, 500);

  function processRefreshQueue(){
    if(refreshQueue.length > 0){
      //debugger;
      console.log("calling refresh");
      refreshScreen(refreshQueue.shift());
    }
  }

  function addRefresh(refresh){
    refreshQueue.push(refresh);
  }

  function liveRefresh(refresh){
    if(refreshQueue.length > 0){
      addRefresh(refresh);
    } else {
      refreshScreen(refresh);
    }
  }

  var exampleRefreshObj = {
    playerArray:copy(this.players),
    pot:copy(this.pot),
    console_message:"",
    showCards:true,
    buttonsToShow:"none"
  }

  function refreshScreen(refreshObj){

    if(typeof refreshObj.console_message === 'undefined' || refreshObj.console_message==null){changeMessage("");}
    else{changeMessage(refreshObj.console_message);}

    clearBoard();

    changePot(refreshObj.pot);

    setButtons(refreshObj.buttonsToShow);

    for(var i=0;i<5;i++){

      var player_id = "player" + (i+1).toString();

      changeMoney(player_id,refreshObj.playerArray[i].banked);
      setPlayerName(player_id,refreshObj.playerArray[i].name);
      setBusted(player_id,refreshObj.playerArray[i].busted);

      for(var j=0; j<refreshObj.playerArray[i].cards.length;j++){
        addCard(refreshObj.playerArray[i].cards[j].value, refreshObj.playerArray[i].cards[j].suit, player_id, j, refreshObj.showCards)
      }

    }

  }

////// Game logic

//Need to find citation from stackoverflow for this, not sure where I got it
function copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copy(v) : v;
   }
   return output;
}

function blackjackGame(){
  //Requirements for using the game object:
  //create a new game object (e.g. game); call game.initGame() on the object, passing in player definitions; call game.deck.initDeck().
  this.deck = new Deck();
  this.players = [];

  this.initGame = function(playerDefs){
    //exactly 5 players are required
    this.initPlayers(playerDefs);
  };

  this.initPlayers = function(playerDefs){
    for(var i=0; i<playerDefs.length; i++){
      this.players.push(new Player(playerDefs[i][0], playerDefs[i][1], playerDefs[i][2], playerDefs[i][3]));
    }
  };

  this.pot = 0;

  this.startGame = function(name){ //called when player clicks start button - every time game , it asks player to keep playing, which calls startGame method
    //this.resetGame();

    // this.getBets();
    // this.playTurns();
    // this.resolveGame();

    // refreshScreen({
    //   playerArray:this.players,
    //   pot:0,
    //   console_message:'Welcome to BlackJack!',
    //   showCards:true,
    //   buttonsToShow:"none"
    // });
    this.dealCards();
    this.getBets();
  };

  this.resetGame = function(){ //prepare game for next round - every time game ends, game is reset
    this.resetPlayers();
    this.pot = 0;
    //setTimeout(refreshScreen.bind(null, this.players, this.pot, "Let's begin.",false,"none"),this.refreshDelay);
    this.startGame();
  };

  this.dealCards = function(){ //at start of game, give each player 2 cards
    for(var i=0; i<this.players.length; i++){
      this.players[i].givePlayerCard(this.deck.drawCards(1)[0]);
      addRefresh({
        playerArray:copy(this.players),
        pot:copy(this.pot),
        console_message:'',
        showCards:true,
        buttonsToShow:"none"
      });
      this.players[i].givePlayerCard(this.deck.drawCards(1)[0]);
      addRefresh({
        playerArray:copy(this.players),
        pot:copy(this.pot),
        console_message:'',
        showCards:true,
        buttonsToShow:"none"
      });
    }
  };

  this.resetPlayers = function(){
    for(var i=0; i<this.players.length; i++){
      this.players[i].reset();  //each player needs a reset method that empties out player hand and resets bet stat to 0
    }
  };

  this.getBets = function(){ //polls all players for the amount they want to bet for this game, taking the money from the players
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && !this.players[i].betPlaced){
        addRefresh({
          playerArray:copy(this.players),
          pot:copy(this.pot),
          console_message:this.players[i].name + ', please enter your bet.',
          showCards:true,
          buttonsToShow:"bet"
        });
        break;
      } else if(this.players[i].isAI && !this.players[i].betPlaced){
        //this.players[i].setBet(null); //waiting for implementation
        this.pot += this.players[i].getBet();
        this.players[i].betPlaced = true;
        addRefresh({
          playerArray:copy(this.players),
          pot:copy(this.pot),
          console_message:this.players[i].name + ' bets $' + this.players[i].bet + '.',
          showCards:true,
          buttonsToShow:"none"
        });
      }

      if(i == this.players.length-1){
        this.playTurns();
      }
    }
  }

  this.setPlayerBet = function(bet){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && !this.players[i].betPlaced){
        //this.players[i].setBet(bet);
//Dummy info until setBet is written
        this.players[i].bet = 100;
        this.players[i].banked -= 100;
        this.pot += 100;
        this.players[i].betPlaced = true;
        addRefresh({
          playerArray:copy(this.players),
          pot:copy(this.pot),
          console_message:'',
          showCards:true,
          buttonsToShow:"none"
        });
        this.getBets();
        break;
      }
    }
  }

  this.playTurns = function(){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && this.players[i].turnStatus === "unplayed"){
        //Is the player human? Exit and wait for input.
        this.players[i].turnStatus = "inprogress";
        addRefresh({
          playerArray:copy(this.players),
          pot:copy(this.pot),
          console_message:'Your move, ' + this.players[i].name + '!',
          showCards:true,
          buttonsToShow:"play"
        });
        break;
      } else if(this.players[i].isAI && this.players[i].turnStatus === "unplayed"){
          this.players[i].playTurn();
          this.players[i].turnStatus = "finished";
          addRefresh({
            playerArray:copy(this.players),
            pot:copy(this.pot),
            console_message:'',
            showCards:true,
            buttonsToShow:"none"
          });
        // var move = [];
        // while(this.players[i].busted === false && this.players[i].turnStatus === "inprogress"){
        //   move = this.players[i].getMove(); //it is player's turn - will he hit or stand? - for AI, getMove() returns current AI action
        //   if(move == 'stand'){ //player waits for round to end
        //     this.players[i].turnStatus = "finished";
        //   }
        //   else if(move == 'hit'){ //player gets another card
        //     this.players[i].givePlayerCard(this.deck.drawCards(1)[0]);
        //     var amount = this.players[i].getTotalAmount();
        //     if(amount > 21){
        //       this.players[i].busted = true;
        //       this.players[i].turnStatus = "finished";
        //     }
        //   }
        //   setTimeout(refreshScreen.bind(null, this.players, this.pot, "", true, 'none'), this.refreshDelay);
        // }
      }

      if(i == this.players.length-1){
        this.resolveGame();
      }
    }
  }

  this.makeMove = function(move){
    for(var i=0; i<this.players.length; i++){
      if(this.players[i].isAI === null && this.players[i].turnStatus === "inprogress"){
        if(move == 'stand'){ //player waits for round to end
          this.players[i].turnStatus = "finished";
        }
        else if(move == 'hit'){ //player gets another card
          this.players[i].givePlayerCard(this.deck.drawCards(1)[0]);
          var amount = this.players[i].getTotalAmount();
          if(amount > 21){
            this.players[i].busted = true;
            this.players[i].turnStatus = "finished";
          }
          addRefresh({
            playerArray:this.players,
            pot:this.pot,
            console_message:'',
            showCards:true,
            buttonsToShow:"play"
          });
        }

        if(this.players[i].turnStatus === "finished"){
          addRefresh({
            playerArray:this.players,
            pot:this.pot,
            console_message:'',
            showCards:true,
            buttonsToShow:"none"
          });
          this.playTurns();
        }
        break;
      }

    }
    this.resolveGame();
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

    if(max === 0){
      //All players were busted, so everyone splits the pot
      return this.players;
    } else {
      return winners;
    }
  };

  this.resolveGame = function(){
    var winners = this.getWinners();
    this.distributeWinnings(this.pot/winners.length, winners);
    this.pot = 0;
    this.collectDiscards();
    addRefresh({
      playerArray:copy(this.players),
      pot:copy(this.pot),
      console_message:'Round over.', //Add message indicating winner(s)
      showCards:true,
      buttonsToShow:"none" //need to add some kind of continue button to start a new round
    });
  };

  this.collectDiscards = function(){
    var discards = [];
    for(var i=0; i<this.players.length; i++){
      discards.concat(this.players[i].getPlayerHand());
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
        this.active.push(new Card('spade',j));
        this.active.push(new Card('heart',j));
        this.active.push(new Card('diamond',j));
        this.active.push(new Card('club',j));
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

  this.lookAtCard = function(){
  	return this.active[0];
  }

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
  this.turnStatus = "unplayed";
  this.betPlaced = false;

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
		this.banked = 1000;
	}

	//output: the amount player is currently realistically betting
	//if bet is higher than banked amount, lowers to banked amount
	this.getBet = function() //returns bet amount that player set, 0ing it, deducting it from their bank
	{
		//
		if(this.bet > this.banked) //player bets too much
		{
			this.bet = this.banked;
		}
		return this.bet;
	}
	
	this.setBet = function(amount) //if player is  AI, asks AI for bet amount, else if amount given, try to set to amount, else set to 0
	{
		var betAmount = 0;
		if(this.isAI != null) //if player is an AI
		{
			betAmount = this.setBetAI();
			this.betPlaced = true;
		}
		else if(amount != undefined) //player not AI, and parameter amount was given
		{
			betAmount = amount;
			this.betPlaced = true;
		}
		//otw, betAmount stays 0 because player gave no concrete value to use
		// and since bet is 0, player has not placed a bet
		if(betAmount > this.banked) //if trying to bet more than he has
		{
			betAmount = this.banked; //assume he is all-in
		}
		this.bet = betAmount;
		this.banked -= this.bet;
		return betAmount;
	}
	
	this.getAIBet = function()
	{
		if(100 > this.banked)
		{
			var temp = this.banked;
			this.banked = 0;
			return temp;
		}
		else
		{
			this.banked -= 100;
			return 100;
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
	
	//input: a list of cards to add from
	//takes the cards one at a time, and validates, then adds them to deck
	this.givePlayerCards = function(listOfCards)
	{
		for(var i = 0; i < listOfCards.length; i++)
		{
			this.givePlayerCard(listOfCards[i]);
		}
	}

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
	this.playTurn = function()
	{
		//If the AI is a Pro (will always choose the right option)
		if(this.isAI == "Pro")
		{
			//Initialize variable used for ending turns when necessary
			var continueTurn = true;
			
			//Create variable that will be used for getting cards from the deck and adding them to the player's hand
			var card = "";
			
			//Get the current value of the players hand
			var endValue = this.getTotalAmount();

			//While the AI can still continue
			while(continueTurn)
			{
				//If the AI has already busted
				if(endValue >= 22)
				{
					//End the AIs turn
					continueTurn = false;

					//Change the AIs bool variable to show that they have busted
					this.busted = true;
				}
				//If the next card in the deck wouldn't cause the AI to go over
				else if(theDeck.lookAtCard().value + endValue < 22)
				{
					//Draw a card
					card = theDeck.drawCards(1)[0];
					//this.endValue += card.value;

					//Put the card in the AI's hand
					this.givePlayerCard(card);
					//this.cardVals.push(card.value);
					//this.cardSuites.push(card.suite);

					//Recalculate the value of the player's hand
					endValue = this.getTotalAmount();
					
					//Refresh the game board
					addRefresh({
						playerArray:copy(this.players),
						pot:copy(this.pot),
						console_message:'',
						showCards:true,
						buttonsToShow:"none"
					});
				}
				//If the next card would cause the AI to bust
				else
				{
					//End the turn
					continueTurn = false;
				}
			}
			
			console.log(endValue);
		}
		//If the AI is a Noob (will always choose the wrong option)
		else if(this.isAI == "Noob")
		{
			//Initialize variable that will be used for determining if the AI's turn should end
			var continueTurn = true;

			//Create variable that will be used for storing cards from the deck and adding them to the AI's hand
			var card = "";

			//Get the current value of the AI's hand
			var endValue = this.getTotalAmount();

			//If the AI's turn can continue
			while(continueTurn)
			{
				//If the AI has already busted
				if(endValue >= 22)
				{
					//End the turn
					continueTurn = false;
					
					//Change the bool variable to show that the AI has busted
					this.busted = true;
				}
				//If the next card in the deck would cause the AI to bust
				else if(theDeck.lookAtCard().value + endValue >= 22)
				{
					//Draw a card from the deck
					card = theDeck.drawCards(1)[0];
					//this.endValue += card.value;
					
					//Add the card to the AI's hand
					this.givePlayerCard(card);

					//this.cardVals.push(card.value);
					//this.cardSuites.push(card.suite);
					
					//Recalculate the value of the AI's hand
					endValue = this.getTotalAmount();
					
					//Refresh the game board
					addRefresh({
						playerArray:copy(this.players),
						pot:copy(this.pot),
						console_message:'',
						showCards:true,
						buttonsToShow:"none"
					});
				}
				//If the next card wouldn't cause the AI to bust
				else
				{
					//End the turn
					continueTurn = false;
				}
			}
			
			console.log(endValue);
		}
		//If the AI is a Dealer Wannabe (follows the same rules that a standard dealer would)
		else if(this.isAI == "Dealer Wannabe")
		{
			//Create a variable for getting cards from the deck and putting them into the AI's hand
			var card = "";
			
			//Get the current value of the AI's hand
			var endValue = this.getTotalAmount();

			while(this.endValue < 17)
			//While the value of the AI's hand is less than 17
			while(endValue < 17)
			{
				//Draw a card from the deck
				card = theDeck.drawCards(1)[0];
				//this.endValue += card.value;
				
				//Add the card to the AI's hand
				this.givePlayerCard(card);

				//this.cardVals.push(card.value);
				//this.cardSuites.push(card.suite);
				
				//Recalculate the value of the Ai's hand
				endValue = this.getTotalAmount();

				//Refresh the game board
				addRefresh({
						playerArray:copy(this.players),
						pot:copy(this.pot),
						console_message:'',
						showCards:true,
						buttonsToShow:"none"
				});
			}

			//If the AI busted
			if(endValue >= 22)
			{
				//Change the bool variable to show that the AI is busted
				this.busted = true;
			}
			
			console.log(endValue);
		}
		//If the AI is a Random Guy (will randomly decide to hit or stay)
		else if(this.isAI == "Random Guy")
		{
			//Create a variable for getting cards from the deck and adding them to the AI's hand
			var card = "";
			
			//Get the current value of the AI's hand
			var endValue = this.getTotalAmount();

			//Get a random number that is either 1 or 2: 1 will continue the AI's turn, 2 will end it
			var continueTurn = Math.floor((Math.random() * 2) + 1);

			while(continueTurn == 1)
			//While the AI's turn can continue
			while(continueTurn == 1 && !this.busted)
			{
				//Draw a card from the deck
				card = theDeck.drawCards(1)[0];
				//this.endValue += card.value;
				
				//Add the card to the AI's hand
				this.givePlayerCard(card);

				//this.cardVals.push(card.value);
				//this.cardSuites.push(card.suite);

				
				//Recalculate the value of the AI's hand
				endValue = this.getTotalAmount();

				//Refresh the game board
				addRefresh({
						playerArray:copy(this.players),
						pot:copy(this.pot),
						console_message:'',
						showCards:true,
						buttonsToShow:"none"
				});

				//Recalculate the variable for determing the AI's actions
				continueTurn = Math.floor((Math.random() * 2) + 1);

				//If the AI has busted
				if(endValue >= 22)
				{
					//End the turn
					continueTurn = 2;
					
					//Change the bool variable to show that the AI has busted
					this.busted = true;
				}
			}
			
			console.log(endValue);
		}
	};
}

/*
//// In 'Start Game' button
// get player name

var game = new blackjackGame();
game.initGame([["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck],["JimBob",null,10000,game.deck],["AI1","Noob",10000,game.deck],["AI1","Noob",10000,game.deck]]);
game.getBets();

//In Place Bet button
//Get player bet
//Will support multiplayer if we decide to implement
game.setPlayerBet(num);
game.getBets();

//In Hit button
game.makeMove('hit'); //or 'stand'
game.playTurns();

/*
getBets method:
iterates through players, checks bet status
if hasn't bet and is AI, calls the getBet function
if isn't AI, but players are left, exits
if checks and finds that all players have bet, calls playTurns

playTurns method:
iterates through players, checks turn status
if hasn't played and is AI, plays out the AI turn
if isn't AI and hasn't played, exits
if checks all and all players have played, calls resolveGame

makeMove method:
iterates through players, checks turn status
if all players marked 'finished', call resolveGame
for first player with turn status 'inprogress', apply move, check if busted, mark accordingly. mark turn status 'finished' if busted, or if player stands
if turn status current player is 'inprogress', exit
if turn status current player just marked 'finished', call playTurns

new player attributes (defaults followed by possible values):
this.betPlaced = false; //false or true
this.turnStatus = "inprogress"; // "unplayed", "inprogress", "finished"


// Tests

for(var i = 0; i < game.players.length; i++)
{
	console.log(game.players[i].name);
}

*/
