var express = require('express');
var router = express.Router();

var hands = require('./hands.js');
var pFunct = require('./functions.js')
var tieFunct = require('./tieBreak-functions.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hand-checker', (req, res)=>{
	var prop = 'hand[]';
	// console.log(req.body[prop])
	var handArray = req.body[prop]
	res.json({
		msg: "You hit the express API!",
		handArray: handArray
	})
})


// router.post('/hand-checker', (req, res)=>{
// 	function checkHands(player1Hands,player2Hands){
// 		var p1Score = 0;
// 		var p2Score = 0;
// 		var scores = {
// 			player1: p1Score,
// 			player2: p2Score
// 		}
// 		for (let i = 0; i < player1Hands.length; i++){
// 			let player1High = pFunct.findHigh(player1Hands[i]);
// 			let player1Stats = pFunct.findRank(player1Hands[i],player1High);
// 			let player2High = pFunct.findHigh(player2Hands[i]);
// 			let player2Stats = pFunct.findRank(player2Hands[i],player2High);	
// 			if(player1Stats.rank == player2Stats.rank){
// 				if(tieFunct.tieBreak(player1Stats,player2Stats)){
// 					scores.player1++;
// 				}else{
// 					scores.player2++;
// 				}
// 			}else if (player1Stats.rank > player2Stats.rank){
// 				scores.player1++;	
// 			}else{
// 				scores.player2++;
// 			}
// 		}
// 		return scores;
// 		res.json(scores)
// 		console.log(scores)
// 	}

// }






module.exports = router;
