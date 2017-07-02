import React, { Component } from 'react';
import $ from 'jquery';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';
import Buttons from './Buttons';
import ThePot from './ThePot';

var cards = new Deck();

class PokerTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dealersHand: ['deck','deck','deck','deck','deck'],
			playersHand: ['deck','deck','deck','deck','deck'],
			// communityCards: ['deck','deck','deck','deck','deck'],
			wager: 0,
			gameOver: false
		}
		this.prepDeck = this.prepDeck.bind(this);
		this.playerBet = this.playerBet.bind(this);
		// this.draw = this.draw.bind(this);
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
		// The deck is now ready for a new hand
		// Set up the playersHand and the dealersHand
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();
		var card5 = cards.deck.shift();
		var card6 = cards.deck.shift();
		var card7 = cards.deck.shift();
		var card8 = cards.deck.shift();
		var card9 = cards.deck.shift();
		var card10 = cards.deck.shift();
		// cards.deck is now 4 items fewer -- we mutated it
		var playersStartingHand = [card1,card3,card5,card7,card9];
		var dealersStartingHand = [card2,card4,card6,card8,card10];
		this.setState({
			playersHand: playersStartingHand,
			dealersHand: dealersStartingHand
		})
	}

	playerBet(amount){
		var newWager = this.state.wager + amount;
		this.setState({
			wager: newWager
		})
		// this.draw()
		this.checkHands(this.state.playersHand)
	}

	checkHands(hand){
		// Python API ()
		// $.ajax({
		// 	method: "POST",
		// 	url: "http://localhost:5000/hand-checker",
		// 	data: { hand: hand },
		// 	success: (response)=>{
		// 		console.log(response)
		// 	}
		// })
		// NodeJS API (Express)
		$.ajax({
			method: "POST",
			url: "http://localhost:3000/hand-checker",
			data: { hand: hand },
			success: (response)=>{
				console.log(response)
			}
		})
	}

	// draw(){
	// 	var communityNewHand = this.state.communityCards;
	// 	communityNewHand.push(cards.deck.shift());
	// 	this.setState({
	// 		communityCards: communityNewHand
	// 	})
	// 	if(this.state.gameOver){
	// 		// Go find out who won
	// 	}
	// }

	render(){
		// this.prepDeck()
		// console.log(cards.deck)

		return(
			<div className="col-sm-12 the-table">
				<ThePot wager={this.state.wager} />
				<PokerHand cards={this.state.dealersHand} /> { /* The computer's hand */}
				{ /* <PokerHand cards={this.state.communityCards} /> Community cards */} 
				<PokerHand cards={this.state.playersHand} /> { /* The player's hand */}
				<Buttons deal={this.prepDeck} bet={this.playerBet} />
			</div>
		)
	}
}

export default PokerTable;