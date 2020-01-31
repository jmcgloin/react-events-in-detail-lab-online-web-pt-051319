import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
	handleOnClick = (event) => {
		this.props.onReceiveCoordinates([event.clientX,event.clientY])
	}
	render() {
		return (
			<div>
				<button onClick={this.handleOnClick} >Get Coords</button>
			</div>
		)
	}
}