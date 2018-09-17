import React, { Component } from "react";
import EmailComponent from "../subcomponents/EmailComponent";
import Footer from "../subcomponents/Footer";

class ContactPage extends Component {
	componentWillMount() {
		window.scrollTo(0,0);
	}
	render() {
		return <div class="contact-page">
			{this.props.navigationBar}
			<div className="contact-section">
				<div className="underlined-title">
					<div className="title">Get in touch</div>
					<div className="underlined width-20"></div>
				</div>
					<EmailComponent />
					<div className="my-email">me@kevinbai.design</div>
					<div className="my-number">+1 (807) 633-4358</div>
					<div className="my-location">Located in 
Thunder Bay, Ontario, Canada</div>
			</div>
			<Footer />
		</div>
	}
}

export default ContactPage;