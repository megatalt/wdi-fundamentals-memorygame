console.log("JS file is connected to HTML! Woo!")

/*

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

*/

/*

if (cardTwo === cardFour) {
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
} 

*/

/*

var gameBoard = document.getElementById('game-board');

var createCards = function (i) {
	for (var i = 0; i =< 4; i++) {
    var newCards = document.createElement('div');
	newCards.className = 'card';
	gameBoard.appendChild(newCards);
	}
}

var button = document.querySelector('#button');
button.addEventListener('click', createCards);

*/

/* Unit 10 - doesn't seem to work on the browser... */

/* Unit 11 assignment starts here */

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
	}
	cardElement.addEventListener('click', isTwoCards);

	if (data-card === queen) {
	cardElement.innerHTML = '<img src="images/queen.png" alt="Queen of Hearts"/>';
	} else {
	cardElement.innerHTML = '<img src="images/king.png" alt="King of Spades"/>';
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
  	if (cardsInPlay.length === 2) {
    	isMatch(cardsInPlay);
    	isMatch.empty();
    	cardsInPlay = [];
  }

} 

