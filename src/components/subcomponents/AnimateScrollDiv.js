import React from "react";

class AnimateScrollDiv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		}
	}
	componentDidMount() {
		if (this.props.scrollPercentage == -1) {
			this.setState({isHidden: true})
		}
	}
	componentDidUpdate() {
		let elem = document.getElementById(this.props.id);
		if (elem == null) return;
		const tagRect = elem.getBoundingClientRect();
		let scrollPercentage = this.props.scrollPercentage == null ? 0.25 : this.props.scrollPercentage;
		const tagOffset = tagRect.y + window.pageYOffset - window.innerHeight + window.innerHeight * scrollPercentage;

		if (window.pageYOffset >= tagOffset && this.state.isHidden) {
			this.setState({
				isHidden: false
			})
		}
	}
	render() {
		let animation = this.props.animation == null ? "fadeIn" : this.props.animation;
		return (
			<div 
				className={!this.state.isHidden ? this.props.className + " animated " + animation : this.props.className + " hidden"} 
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
	
	
}

export default AnimateScrollDiv;