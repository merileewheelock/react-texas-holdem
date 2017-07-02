// This is not a react component, this is just a utility class. Don't need props.

class Deck{
	constructor() {
		this.deck = []
	}

	createDeck(){
		this.deck = []
		var suits = ['h','s','d','c'];
		for(let s = 0; s < suits.length; s++){
			for(let c = 1; c <= 13; c++){
				this.deck.push(c+suits[s]);
			}
		}
		return this.deck;
	}

	shuffleDeck(){
		for(let i = 0; i < 14000; i++){
			var random1 = Math.floor(Math.random() * 52);
			var random2 = Math.floor(Math.random() * 52);
			var temp = this.deck[random1];
			this.deck[random1] = this.deck[random2];
			this.deck[random2] = temp;
		}
	}
}

export default Deck;