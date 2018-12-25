import React, { Component } from "react";
import EmailComponent from "./subcomponents/EmailComponent";
import Footer from "./subcomponents/Footer";
import AnimateScrollDiv from "./subcomponents/AnimateScrollDiv";
import getNavBar from "./subcomponents/NavigationBar";
import "./stylesheets/main.css";
import CustomHead from "./subcomponents/CustomHead";
import Link from "next/link";

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
			<div className="contact-section">
				<img className="background-img" src="/static/main-site/assets/giant3.png"/>
				<div className="underlined-title">
					<div className="title">Get in touch</div>
					<div className="underlined width-20"></div>
				</div>
				<form className="contact-form">
					<label>Email</label>
					<input type="text" name="email" className="input-field"/>
					<label>Name</label>
					<input type="text" name="name" className="input-field"/>
					<label>Subject</label>
					<input type="text" name="subject" className="input-field"/>
					<label>Message</label>
					<textarea name="message" className="input-field" data-gramm_editor="false"></textarea>
					<input type="submit" value="Submit" className="submit-btn"/>
				</form>
				<div className="my-location">Located in <br/>Thunder Bay, Ontario, Canada</div>
				<footer className="contact-footer">
					<div className="page-links-container">
						{
							navBar.props.navItems.map((item) => {
								return <div><Link href={item.link}><a>{item.name}</a></Link></div>
							})
						}
					</div>
					<div className="contact-info-section">
						<div className="number">+1 (807) 633-4358</div>
						<div className="email"><a href="mailto:kevin.c.bai0@gmail.com">kevin.c.bai0@gmail.com</a></div>
					</div>
					<div className="social-media-symbols">
						<a target="_blank" href="https://instagram.com/kevinbai0"><img src="/static/main-site/assets/igLogo.png" alt="instagram"/></a>
						<a target="_blank" href="https://linkedin.com/in/kevinbai0"><img src="/static/main-site/assets/linkedLogo.png" alt="linkedin"/></a>
						<a target="_blank" href="https://github.com/kevinbai0"><img src="/static/main-site/assets/github.png" alt="github"/>
					</a>
				</div>
				</footer>
			</div>
		</div>
	}

	toggleModal(component, completion = () => {}) {
		this.setState({
			modalComponent: component
		}, completion());
	}
}

export default ContactPage;