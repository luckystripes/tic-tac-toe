angular
	.module("tictactoe")
	.controller("tttcontroller", tttcontroller);

	tttcontroller.$inject = ['$firebaseArray'];

function tttcontroller ($firebaseArray){
	var self = this;
	self.playermoves = playermoves;
	self.winner = winner;
	
	var x = "ios";
	var o = "android";
	var currentPlayer = x;


	var moves = 0;

	self.board=[
		{value:""},
		{value:""},
		{value:""},
		{value:""},
		{value:""},
		{value:""},
		{value:""},
		{value:""},
		{value:""}
	]

/////////////////////////////////////////FUNCTIONS///////////////////////////

// alternates x and o moves
	function playermoves ($index) {
		 var ref = new Firebase ("tic-tac-toe-what.firebaseIO.com/board")
		 var move = $firebaseObject(ref);
	
		if (currentPlayer === x){
			self.board[$index].image = "img/apple.png";
			self.board[$index].value = "ios";
			winner(currentPlayer);
			currentPlayer = o;
			console.log("inside x", currentPlayer);
		
		} else {
			self.board[$index].image = "img/android.png";
			self.board[$index].value = "android";
			winner(currentPlayer);
			currentPlayer = x;
			console.log("inside o");
		} 

		america.$save();
		
	
	// NEED TO PREVENT PLAYER FROM CHANGING MOVE	
	}


// get winner who has any 3 in a row 
	function winner (currentPlayer){
		console.log("winner function called");
		console.log("asdasdf");
			// horizontal wins ///////////////IOS//////////////////////////
		if ( (self.board[0].value ==="ios") && (self.board[1].value ==="ios") && (self.board[2].value ==="ios")|| 
			 (self.board[3].value ==="ios") && (self.board[4].value ==="ios") && (self.board[5].value ==="ios")||
			 (self.board[6].value ==="ios") && (self.board[7].value ==="ios") && (self.board[8].value ==="ios")|| 
			 // vertical wins
			 (self.board[0].value ==="ios") && (self.board[3].value ==="ios") && (self.board[6].value ==="ios")||
			 (self.board[1].value ==="ios") && (self.board[4].value ==="ios") && (self.board[7].value ==="ios")|| 
			 (self.board[2].value ==="ios") && (self.board[5].value ==="ios") && (self.board[8].value ==="ios")||
			 // diaganol wins
			 (self.board[0].value ==="ios") && (self.board[4].value ==="ios") && (self.board[8].value ==="ios")|| 
			 (self.board[2].value ==="ios") && (self.board[4].value ==="ios") && (self.board[6].value ==="ios") ){

			alert(currentPlayer + "wins");
			
			// horizontal wins /////////ANDROID////////////////////////////
		} else if ( (self.board[0].value === "android") && (self.board[1].value ==="android") && (self.board[2].value==="android")|| 
					(self.board[3].value === "android") && (self.board[4].value ==="android") && (self.board[5].value==="android")||
					(self.board[6].value === "android") && (self.board[7].value ==="android") && (self.board[8].value==="android")|| 
					 // vertical wins
					(self.board[0].value === "android") && (self.board[3].value ==="android") && (self.board[6].value==="android")||
					(self.board[1].value === "android") && (self.board[4].value ==="android") && (self.board[7].value==="android")|| 
					(self.board[2].value === "android") && (self.board[5].value ==="android") && (self.board[8].value==="android")||
					 // diaganol wins
					(self.board[0].value === "android") && (self.board[4].value ==="android") && (self.board[8].value==="android")|| 
					(self.board[2].value === "android") && (self.board[4].value ==="android") && (self.board[6].value==="android")){

			alert(currentPlayer + "wins");
			
		}	else{
			null;
		}


	}
	}










	














