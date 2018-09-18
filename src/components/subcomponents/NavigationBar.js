import React , { Component } from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	return <div className={props.className}>
		<Link to={props.link}>{props.title}</Link>
	</div>
}

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth
		}
	}
	componentDidMount() {
		window.addEventListener("resize", this.resizeListener);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeListener);
	}

	resizeListener = () => {
		this.setState({
			width: window.innerWidth
		})
	}
	render() {
		if (this.state.width < 800) {
			return <HamburgerNavigation navItems={this.props.navItems} colorState={this.props.lightBar ? "light" : "dark"} />
		}

		return <nav>
			{this.props.navItems.map((item, i) => {
				var className = "nav-item";
				if (i == this.props.selected) className += " selected";
				if(!this.props.lightBar) className += " dark";
				
				return <NavItem key={i} title={item.name} className={className} selected={this.props.selected == i} link={item.link}/>
			})}
		</nav>
	}
}

export default NavigationBar;


class HamburgerNavigation extends Component {
	default = "default";
	expanded = "expanded";
	firstLoad = true;
	last = this.default;

	constructor(props) {
		super(props);
		this.state = {
			hamburgerState: this.default,
		}
	}
	render() {
		let classAddonNav = this.state.hamburgerState == this.default ? "nav-hidden" : "animated bounceInDown nav-shown";
		if (this.firstLoad) {
			classAddonNav = "nav-hidden";
			this.firstLoad = false;
		}
		let classAddonItem = this.state.hamburgerState == this.default ? "hidden" : "";
		let menuClass = this.state.hamburgerState == this.default ? "" : "open";

		this.last = this.state.hamburgerState;
		let menuItemClass = this.state.hamburgerState == this.default ? "" : "animate";
		return (
			<div className="mobile-nav-container">
				<div id="nav-icon" className={menuClass} onClick={this.toggleHamburger}>
					<span className={this.props.colorState}></span>
					<span className={this.props.colorState}></span>
					<span className={this.props.colorState}></span>
					<span className={this.props.colorState}></span>
				</div>
				<div className={"mobile-nav-items-container " + classAddonNav}>
					{this.props.navItems.map((navItem, i) => {
						return <div key={i} className={classAddonItem}><Link to={navItem.link} onClick={(e) => this.toggleHamburger}>{navItem.name}</Link></div>
					})}
				</div>
			</div>
		);
		

	}

	toggleHamburger =() => {
		this.setState({
			hamburgerState: this.state.hamburgerState == this.default ? this.expanded : this.default
		})
	}
}