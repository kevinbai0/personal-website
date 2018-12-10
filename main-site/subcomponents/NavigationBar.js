import React , { Component } from "react";
import Link from "next/link";

const NavItem = (props) => {
	return <div className={props.className}>
		<Link href={props.link}><a>{props.title}</a></Link>
	</div>
}

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0
		}
	}
	componentDidMount() {
		window.addEventListener("resize", this.resizeListener);
		this.resizeListener();
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeListener);
	}

	resizeListener = () => {
		console.log(window.innerWidth);
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


const getNavBar = (selected, light) => {
    return <NavigationBar
        navItems={[
            {name: "Home", link: "/"}, 
            {name: "Work", link: "/work"}, 
            {name: "Contact", link: "/contact"}, 
            {name: "About Me", link: "/about"}
        ]}
        selected={selected}
        lightBar={light}
    />
}

export default getNavBar;


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
						return <div key={i} className={classAddonItem}><Link href={navItem.link}><a onClick={(e) => this.toggleHamburger}>{navItem.name}</a></Link></div>
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