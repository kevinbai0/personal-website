import React , { Component } from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return <div className={props.selected ? "nav-item selected" : "nav-item"}>
		<Link to={props.link}>{props.title}</Link>
	</div>
}

class NavigationBar extends Component {
	render() {
		return <nav>
			{this.props.navItems.map((item, i) => {
				return <NavItem key={i} title={item.name} selected={this.props.selected == i} link={item.link}/>
			})}
		</nav>
	}
}

export default NavigationBar;