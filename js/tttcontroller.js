angular
	.module("tictactoe")
	.controller("tttcontroller", tttcontroller);

	tttcontroller.$inject = ['$firebaseObject'];

function tttcontroller ($firebaseObject){
	var self = this;
	
	// players
	var x = "cheech";
	var o = "chong";
	// var currentPlayer = x;
	var moves = 0;
	
	// functions
	self.game = syncFiyah();
	self.playermoves = playermoves;
	self.winner = winner;
	self.tied = tied;
	


	// board array
	// self.board=[
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""},
	// 	{value:""}
	// ]

/////////////////////////////////////////FUNCTIONS///////////////////////////

// sync game with firebase
	function syncFiyah (){
		var ref = new Firebase("tic-tac-toe-what.firebaseIO.com/board");
		var gameObj = $firebaseObject(ref);

		gameObj.$loaded(function(){
			gameObj.x = "cheech";
			gameObj.o = "chong";
			gameObj.currentPlayer = x;
			gameObj.moves = 0;

			gameObj.board=[
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"},
					{value:"", image:"img/blank.gif"}
			]

			gameObj.$save();
		}) //end of $loaded

		return gameObj;
	} //end of syncFiyah


// alternates x and o moves
	function playermoves ($index) {
		if (self.game.currentPlayer === x){
			self.game.board[$index].image = "img/cheech.png";
			self.game.board[$index].value = "cheech";	
			// winner(self.game.currentPlayer);
			self.game.moves ++;
			self.game.currentPlayer = o;
			tied(moves);
			self.game.$save();	
		
		} 	else {
			self.game.board[$index].image = "img/chong.png";
			self.game.board[$index].value = "chong";
			self.game.currentPlayer = o;			
			// winner(self.game.currentPlayer);
			self.game.moves++;
			self.game.currentPlayer = x;
			tied(moves);
			self.game.$save();
	
		} 

		// NEED TO PREVENT PLAYER FROM CHANGING MOVE	
	}// end playermoves///////////////////////////////////////////////


// get winner who has any 3 in a row 
	function winner (currentPlayer){
			// horizontal wins ///////////////cheech//////////////////////////
		if ( (self.game.board[0].value ==="cheech") && (self.game.board[1].value ==="cheech") && (self.game.board[2].value ==="cheech")|| 
			 (self.game.board[3].value ==="cheech") && (self.game.board[4].value ==="cheech") && (self.game.board[5].value ==="cheech")||
			 (self.game.board[6].value ==="cheech") && (self.game.board[7].value ==="cheech") && (self.game.board[8].value ==="cheech")|| 
			 // vertical wins
			 (self.game.board[0].value ==="cheech") && (self.game.board[3].value ==="cheech") && (self.game.board[6].value ==="cheech")||
			 (self.game.board[1].value ==="cheech") && (self.game.board[4].value ==="cheech") && (self.game.board[7].value ==="cheech")|| 
			 (self.game.board[2].value ==="cheech") && (self.game.board[5].value ==="cheech") && (self.game.board[8].value ==="cheech")||
			 // diaganol wins
			 (self.game.board[0].value ==="cheech") && (self.game.board[4].value ==="cheech") && (self.game.board[8].value ==="cheech")|| 
			 (self.game.board[2].value ==="cheech") && (self.game.board[4].value ==="cheech") && (self.game.board[6].value ==="cheech") ){

			alert("cheech gets the hit");
			
			// horizontal wins /////////chong////////////////////////////
		} else if ( (self.game.board[0].value === "chong") && (self.game.board[1].value ==="chong") && (self.game.board[2].value==="chong")|| 
					(self.game.board[3].value === "chong") && (self.game.board[4].value ==="chong") && (self.game.board[5].value==="chong")||
					(self.game.board[6].value === "chong") && (self.game.board[7].value ==="chong") && (self.game.board[8].value==="chong")|| 
					 // vertical wins
					(self.game.board[0].value === "chong") && (self.game.board[3].value ==="chong") && (self.game.board[6].value==="chong")||
					(self.game.board[1].value === "chong") && (self.game.board[4].value ==="chong") && (self.game.board[7].value==="chong")|| 
					(self.game.board[2].value === "chong") && (self.game.board[5].value ==="chong") && (self.game.board[8].value==="chong")||
					 // diaganol wins
					(self.game.board[0].value === "chong") && (self.game.board[4].value ==="chong") && (self.game.board[8].value==="chong")|| 
					(self.game.board[2].value === "chong") && (self.game.board[4].value ==="chong") && (self.game.board[6].value==="chong")){

			alert("chong gets the hit");
			
		}	else{
			null;
		}


		}// end winner//////////////////////////////////////////////////

// tied
	function tied (moves){
		if (self.game.moves===9) {

			alert("tied");

		};
	}// end tied/////////////////////////////////////////////////////




}










	














