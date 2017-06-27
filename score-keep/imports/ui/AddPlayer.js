import React from 'react';
/*===================================================================*/
/*local imports*/
import {Players} from './../api/players';
/*===================================================================*/

	export default class AddPlayer extends React.Component {

	handleSubmit = function(e){
		let playerName = e.target
			.playerName.value
				e.preventDefault();
				
	if (playerName) {
		e.target.playerName.value = '';
			Players.insert({
				name: playerName,
					score: 0
						});
							}
								};

render(){
		return (
			<div className="item">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						type="this.handleSubmit"
							name="playerName"
								placeholder="Player name"/>
						      <button className="button"
						      	>Add Player<
						      		/button>
						  				  </form>
													</div>
														);
															}
																};



	
			








