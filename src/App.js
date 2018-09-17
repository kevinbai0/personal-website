import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import NavigationBar from './components/subcomponents/NavigationBar';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';

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
					<Route path="/work" render={() => <WorkPage navigationBar={this.getNavBar(1)} /> }/>
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
