import React , { Component } from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return <div className={props.selected ? "nav-item selected" : "nav-item"} onClick={props.onClick}>
		<Link to={props.link}>{props.title}</Link>
	</div>
}

class NavigationBar extends Component {
	render() {
		return <nav>
			{this.props.navItems.map((item, i) => {
				return <NavItem key={i} title={item.name} selected={this.props.selected == i} link={item.link} onClick={(e) => this.props.switchNavSection(i)}/>
			})}
		</nav>
	}
}

export default NavigationBar;