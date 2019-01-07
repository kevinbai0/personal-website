import React, {Component} from "react";
import FeaturedWorkComponent from "./subcomponents/FeaturedWorkComponent";
import Footer from "./subcomponents/Footer";
import AnimateScrollDiv from "./subcomponents/AnimateScrollDiv";
import "./stylesheets/main.css";
import getNavBar from "./subcomponents/NavigationBar";
import CustomHead from "./subcomponents/CustomHead";

class WorkPage extends Component {
	
	featuredWorkItems = []

	constructor(props) {
		super(props);
		this.state = {
			scrollOffset: 0,
			windowWidth: 1280,
			featuredWork: [
				{
					title: "Molar Mass Calculator", 
					src:"/static/main-site/assets/portfolio/molarmass.png",
					type: "iPhoneX",
					style: {
						background: "#aaffa9",
						background: "-webkit-linear-gradient(to right, #aaffa9, #11ffbd)",
						background: "linear-gradient(to right, #aaffa9, #11ffbd)"
					},
					description: "A molar mass calculator published on the app store with a clean UI and functional UX."
				},
				{
					title: "Falcotronix Website", 
					src:"/static/main-site/assets/portfolio/falcotronix.png", 
					type: "macbook",
					style: {
						background: "#7F7FD5",
						background: "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
						background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)"
					}, description: "Website for FIRST Robotics Team"
				},
			],
		}
	}
	componentDidMount() {
		this.setState({
			windowWidth: window.innerWidth
		})
		window && window.scrollTo(0, 0);
		window && window.addEventListener("scroll", this.scrollListener);
	}

	componentWillUnmount() {
		window && window.removeEventListener("scroll", this.scrollListener);
	}
	scrollListener = () => {
		this.setState({
			scrollOffset: window ? window.pageYOffset : 0
		})
	}

	render() {
		return <div className="work-page">
			<CustomHead />
			{getNavBar(1, false)}
			<div className="underlined-title">
				<div className="title">Projects</div>
				<div className="underlined"></div>
			</div>
			<div className="featured-work-container">
				{
					this.state.featuredWork.map((workItem, i) => {
						let scrollPercentage = 0.25;
						if (this.state.windowWidth < 800) {
							if (i == 0) scrollPercentage = -1;
						}
						else {
							if (i == 0 || i == 1) scrollPercentage = -1;
						}
						return (
							<AnimateScrollDiv 
								key={i} 
								id={"featured-work-item"+i} 
								className="" 
								animation={i % 2 == 0 ? "zoomInLeft" : "zoomInRight"} 
								scrollPercentage={scrollPercentage}
							>
								<FeaturedWorkComponent title={workItem.title} src={workItem.src} style={workItem.style} description={workItem.description} type={workItem.type}/>
							</AnimateScrollDiv>
						)
					})
				}
			</div>
			<Footer />
		</div>
	}
}

export default WorkPage;