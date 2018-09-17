import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from './LandingPage';
import NavigationBar from './NavigationBar';
import AboutPage from './AboutPage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 0
		}
	}
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={() => <LandingPage navigationBar={this.getNavBar(0)}/>}/>
					<Route path="/about" render={() => <AboutPage navigationBar={this.getNavBar(4)}/> }/>
				</div>
			</Router>
		);
	}

	getNavBar = (i) => {
		return <NavigationBar
			navItems={[
				{name: "Home", link: "/"}, 
				{name: "Work", link: "/work"}, 
				{name: "Blog", link: "/blog"}, 
				{name: "Contact", link: "/contact"}, 
				{name: "About Me", link: "/about"}
			]}
			selected={i}
		/>
	}
}

export default App;
