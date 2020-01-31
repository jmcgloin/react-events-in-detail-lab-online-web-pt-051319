import  React, {Component} from 'react';

export default class DelayedButton extends Component {
	handleOnClick = (event) => {
		event.persist()
		// const persistedEvent = event -- eventhoug the prior readme show this option, it doesn't work
		setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
	}
	render() {
		return (
			<div>
				<button onClick={this.handleOnClick} >Delayed get coords</button>
			</div>
		)
	}
}