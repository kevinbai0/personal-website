import React , { Component } from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return <div className={props.className}>
		<Link to={props.link}>{props.title}</Link>
	</div>
}

class NavigationBar extends Component {
	render() {
		var lightBar = true;
		if (this.props.selected > 0 && this.props.selected < 3) {
			lightBar = false;
		}

		return <nav>
			{this.props.navItems.map((item, i) => {
				var className = "nav-item";
				if (i == this.props.selected) className += " selected";
				if(!lightBar) className += " dark";
				return <NavItem key={i} title={item.name} className={className} selected={this.props.selected == i} link={item.link}/>
			})}
		</nav>
	}
}

export default NavigationBar;