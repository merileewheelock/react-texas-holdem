import React, { Component } from 'react';

class Buttons extends Component {
	render(){
		return(
			<div className="col-sm-12 text-center buttons">
				<div className="col-sm-2 col-sm-offset-1">
					<button onClick={this.props.deal} className="btn btn-default">Deal</button>
				</div>
				<div className="col-sm-2">
					<button onClick={()=>{this.props.bet(10)}} className="btn btn-default">Bet 10</button>
				</div>
				<div className="col-sm-2">
					<button onClick={()=>{this.props.bet(100)}} className="btn btn-default">Bet 100</button>
				</div>
				<div className="col-sm-2">
					<button className="btn btn-default">Check</button>
				</div>
				<div className="col-sm-2">
					<button className="btn btn-default">Fold</button>
				</div>
			</div>
		)
	}
}

export default Buttons;