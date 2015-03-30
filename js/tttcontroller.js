angular
	.module("tictactoe")
	.controller("tttcontroller", tttcontroller);


function tttcontroller (){
	var self = this;
	self.begin = begin;

	self.box=[
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:false},
		{sq:true},
	]

	function begin ($index) {
		self.box[$index].image = "img/apple.png";


	}



}