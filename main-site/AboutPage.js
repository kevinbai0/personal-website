import React, { Component } from "react";
import Footer from "./subcomponents/Footer";
import Link from "next/link";
import "animate.css";
import "./stylesheets/main.css";
import getNavBar from "./subcomponents/NavigationBar";
import CustomHead from "./subcomponents/CustomHead";

class AboutPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "animated jackInTheBox",
			subtitle: "animated flipInX delay-1s",
			programmingTitle: "hidden",
			programmingTitle2: "hidden",
			programmingTitle3: "hidden",
			programmingTitle4: "hidden",
			programmingThing1: "hidden",
			programmingThing2: "hidden",
			programmingThing3: "hidden",
			programmingThing4: "hidden",
			roboticsTitle1: "hidden",
			roboticsTitle2: "hidden",
			roboticsTitle3: "hidden",
		}
	}

	componentDidMount() {
		window.scrollTo(0,0);
		window.addEventListener("scroll", this.scrollListener);
	}

	scrollListener = () => {
		Object.keys(this.state).map((key) => 
		{
			if (key.includes("programmingThing")) {
				this.animateTag(key, 0.25, "flipInX");
			}
			else this.animateTag(key, 0.25, "bounceInLeft");
		});
	}


	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
	}

	animateTag = (tag, scrollPercentage, animation) => {
		let elem = document.getElementById(tag);
		if (elem == null) return;
		const tagRect = elem.getBoundingClientRect();
		const tagOffset = tagRect.y + window.pageYOffset - window.innerHeight + window.innerHeight * scrollPercentage;
		if (window.pageYOffset >= tagOffset) {
			if (this.state[tag] === "hidden") {
				this.setState({
					[tag]: "animated " + animation
				})
			}
		}
	}

	render() {
		return <div className="about-page">
			<CustomHead />
			{getNavBar(3, true)}
			<div className="about-main-section">
				<div className={"title " + this.state.title} id="title">Hi, I'm Kevin Bai</div>
				<div className={"subtitle " + this.state.subtitle} id="subtitle">18 | University of Waterloo Computer Science</div>
			</div>
			<div className="about-programming-section">
				<div className={"programming-description " + this.state.programmingTitle } id="programmingTitle">I love programming & design 👨🏽‍💻</div>
				<div className={"programming-description " + this.state.programmingTitle2 } id="programmingTitle2">Especially mobile apps and websites 📱🖥</div>
				<div className={"programming-description " + this.state.programmingTitle3 } id="programmingTitle3">Check out my <span className="colored-teal"><Link href="/work"><a>portfolio</a></Link></span> 💁🏽‍♂️</div>
				<div className={"programming-description-large " + this.state.programmingTitle4} id="programmingTitle4">but, I also program other <span className="colored-coral"><a target="_blank" href="https://github.com/kevinbai0">things</a></span></div>
				<div className="programming-things-container">
					<div id="programmingThing1" className={this.state.programmingThing1}>Robots</div>
					<div id="programmingThing2" className={this.state.programmingThing2}>Arduinos</div>
					<div id="programmingThing3" className={this.state.programmingThing3}>Computer Vision</div>
					<div id="programmingThing4" className={this.state.programmingThing4}>Machine Learning</div>
				</div>
			</div>
			<div className="about-robotics-section">
				<div className={"robotics-description " + this.state.roboticsTitle1 } id="roboticsTitle1">I know a thing or two about robotics</div>
				<div className={"robotics-description-title " + this.state.roboticsTitle2 } id="roboticsTitle2">I started a <span className="colored-orange extra-bold"><a target="_blank" href="https://www.firstinspires.org/">FIRST</a></span> Robotics Team in high school</div>
				<div className={"robotics-description-huge-title " + this.state.roboticsTitle3} id="roboticsTitle3">They're called <span className="colored-coral"><a target="_blank" href="http://www.falcotronix.com">Falcotronix</a></span></div>
			</div>
			<div className="about-connect-section">
				<div className="content"><Link href="/contact"><a>Let's Connect!</a></Link></div>
				
				<svg width="23px" height="80px" viewBox="0 0 23 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id="About" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Desktop" transform="translate(-1265.000000, -3023.000000)" fill="#FFFFFF">
							<g id="arrow" transform="translate(1265.000000, 3023.000000)">
								<rect id="Rectangle-3" x="8" y="0" width="8" height="64"></rect>
								<polygon id="Triangle" points="11.5 80 0 64 23 64"></polygon>
							</g>
						</g>
					</g>
				</svg>
			</div>

			<Footer />
		</div>
	}
}

export default AboutPage;