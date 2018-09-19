import React, { Component } from "react";
import EmailComponent from "../subcomponents/EmailComponent";
import Footer from "../subcomponents/Footer";
import AnimateScrollDiv from "../subcomponents/AnimateScrollDiv";

class ContactPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalComponent: ""
		}
	}
	componentWillMount() {
		window.scrollTo(0,0);
	}
	render() {
		return <div className="contact-page">
			{this.state.modalComponent}
			{this.props.navigationBar}
			<div className="contact-section">
				<div className="underlined-title">
					<div className="title">Get in touch</div>
					<div className="underlined width-20"></div>
				</div>
					<AnimateScrollDiv id="email" animation={"flipInX"} scrollPercentage={-1}><EmailComponent toggleModal={this.toggleModal.bind(this)}/></AnimateScrollDiv>
					<div className="my-email animated bounceInUp">me@kevinbai.design</div>
					<div className="my-number animated bounceInUp">+1 (807) 633-4358</div>
					<div className="my-location animated bounceInUp">Located in 
Thunder Bay, Ontario, Canada</div>
			</div>
			<Footer />
		</div>
	}

	toggleModal(component, completion = () => {}) {
		this.setState({
			modalComponent: component
		}, completion());
	}
}

export default ContactPage;