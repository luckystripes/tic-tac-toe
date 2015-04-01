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

	self.box=[
		{sq:false, number:0},
		{sq:false, number:1},
		{sq:false, number:2},
		{sq:false, number:3},
		{sq:false, number:4},
		{sq:false, number:5},
		{sq:false, number:6},
		{sq:false, number:7},
		{sq:false, number:8},
	]


	// self.wins = [[0, 1, 2], 
	// 			 [3, 4, 5], 
	// 			 [6, 7, 8], 
	// 			 [0, 3, 6], 
 //                 [1, 4, 7], 
 //                 [2, 5, 8], 
 //                 [0, 4, 8], 
 //                 [2, 4, 6]]


/////////////////////////////////////////FUNCTIONS///////////////////////////

// alternates x and o moves
	function playermoves ($index) {
		if (currentPlayer === x){
			self.box[$index].image = "img/apple.png";
			currentPlayer = o;
		} else {
			self.box[$index].image = "img/android.png";
			currentPlayer = x;
		} 
	// NEED TO PREVENT PLAYER FROM CHANGING MOVE	
	}


// get winner who has 3 in a row 
	function winner (currentPlayer){
		if ( (self.box[0] && self.box[1] && self.box[2]) || (self.box[3] && self.box[4] && self.box[5]) ||
			 (self.box[6] && self.box[7] && self.box[8]) || (self.box[0] && self.box[3] && self.box[6]) ||
			 (self.box[1] && self.box[4] && self.box[7]) || (self.box[2] && self.box[5] && self.box[8]) ||
			 (self.box[0] && self.box[4] && self.box[8]) || (self.box[2] && self.box[4] && self.box[6]) ){

			alert(currentPlayer + "wins");
			console.log(currentPlayer + "wins");
		} 



	}










	














}