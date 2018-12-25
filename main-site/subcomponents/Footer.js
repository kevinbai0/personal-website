import React, { Component } from "react";
import Link from "next/link";


class Footer extends Component {
	render() {
		return (
			<footer className="page-footer">
				<div className="nav-items">
					<div><Link href="/"><a>Home</a></Link></div>
					<div><Link href="/work"><a>Work</a></Link></div>
					<div><Link href="/contact"><a>Contact</a></Link></div>
					<div><Link href="/about"><a>About Me</a></Link></div>
				</div>
				<div className="social-media-symbols">
					<a target="_blank" href="https://instagram.com/kevinbai0"><img src="/static/main-site/assets/igLogo.png" alt="instagram"/></a>
					<a target="_blank" href="https://linkedin.com/in/kevinbai0"><img src="/static/main-site/assets/linkedLogo.png" alt="linkedin"/></a>
					<a target="_blank" href="https://github.com/kevinbai0"><img src="/static/main-site/assets/github.png" alt="github"/></a>
				</div>
				<div className="email">
					<a href="mailto:kevin.c.bai0@gmail.com">kevin.c.bai0@gmail.com</a>
				</div>
			</footer>
		);
	}
}

export default Footer;