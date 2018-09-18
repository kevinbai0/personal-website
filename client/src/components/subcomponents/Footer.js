import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="nav-items">
					<div><Link to="/">Home</Link></div>
					<div><Link to="/work">Work</Link></div>
					<div><Link to="/contact">Contact</Link></div>
					<div><Link to="/about">About Me</Link></div>
				</div>
				<div className="social-media-symbols">
					<a target="_blank" href="https://instagram.com/kevinbai0"><img src="/assets/igLogo.png" alt="instagram"/></a>
					<a target="_blank" href="https://linkedin.com/in/kevinbai0"><img src="/assets/linkedLogo.png" alt="linkedin"/></a>
					<a target="_blank" href="https://github.com/kevinbai0"><img src="/assets/github.png" alt="github"/></a>
				</div>
				<div className="email">
					me@kevinbai.design
				</div>
			</footer>
		);
	}
}

export default Footer;