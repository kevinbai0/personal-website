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
		const tagOffset = tagRect.y + window.pageYOffset - window.innerHeight + window.innerHeight * this.props.scrollPercentage;
		if (this.props.offset >= tagOffset && this.state.isHidden) {
			this.setState({
				isHidden: false
			})
		}
	}
	render() {
		
		return (
			<div 
				className={!this.state.isHidden ? this.props.className + " animated " + this.props.animation : this.props.className + " hidden"} 
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
	
	
}

export default AnimateScrollDiv;