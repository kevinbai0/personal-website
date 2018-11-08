import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import NavigationBar from './components/subcomponents/NavigationBar';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';
import ContactPage from './components/pages/ContactPage';
import SearchEngine from "./components/pages/SearchEngine";

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={() => <LandingPage navigationBar={this.getNavBar(0, true)}/>}/>
					<Route path="/about" render={() => <AboutPage navigationBar={this.getNavBar(3, true)}/> }/>
					<Route path="/work" render={() => <WorkPage navigationBar={this.getNavBar(1, false)} /> }/>
					<Route path="/contact" render={() => <ContactPage navigationBar={this.getNavBar(2, false)} /> } />
					<Route path="/searchEngine" render={() => <SearchEngine navigationBar={this.getNavBar(-1, false)} />} />
				</div>
			</Router>
		);
	}

	getNavBar = (i, light) => {
		return <NavigationBar
			navItems={[
				{name: "Home", link: "/"}, 
				{name: "Work", link: "/work"}, 
				{name: "Contact", link: "/contact"}, 
				{name: "About Me", link: "/about"}
			]}
			selected={i}
			lightBar={light}
		/>
	}
}

export default App;
