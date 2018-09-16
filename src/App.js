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
					<Route path ="/" render={ () => 
						<NavigationBar 
							navItems={[
								{name: "Home", link: "/"}, 
								{name: "Work", link: "/work"}, 
								{name: "Blog", link: "/blog"}, 
								{name: "Contact", link: "/contact"}, 
								{name: "About Me", link: "/about"}
							]}
							selected={this.state.selectedPage}
							switchNavSection={this.switchNavSection}
						/> 
					}/>
					<Route exact path="/" render={() => <LandingPage />}/>
					<Route path="/about" render={() => <AboutPage />}/>
				</div>
			</Router>
		);
	}

	switchNavSection = (i) => {
		console.log(i);
		this.setState({
			selectedPage: i
		})
	}
}

export default App;
