import React, { Component } from "react";
import getNavBar from "./subcomponents/NavigationBar";
import "./stylesheets/main.css";
import CustomHead from "./subcomponents/CustomHead";
import ContactSection from "./subcomponents/ContactSection";

class ContactPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalComponent: ""
		}
	}
	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
		let navBar = getNavBar(2, false);
		return <div className="contact-page">
			<CustomHead />
			{this.state.modalComponent}
			{navBar}
			<ContactSection navBarItems={navBar.props.navItems} />
		</div>
	}

	toggleModal(component, completion = () => {}) {
		this.setState({
			modalComponent: component
		}, completion());
	}
}

export default ContactPage;