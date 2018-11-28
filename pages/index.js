import React, {Component} from "react";
import Footer from "../subcomponents/Footer";
import FeaturedWorkComponent from "../subcomponents/FeaturedWorkComponent";
import EmailComponent from "../subcomponents/EmailComponent";
import AnimateScrollDiv from "../subcomponents/AnimateScrollDiv";
import getNavBar from "../subcomponents/NavigationBar";
import Link from 'next/link';
import "../stylesheets/main.css";
import "animate.css";
import CustomHead from "../subcomponents/CustomHead";

const FullstackItem = (props) => {
	return <div id={props.id} className={"fullstack-item"}>
		<div className="bullet-number">{props.order}.</div>
		<div className="writing-container">
			<div className="title">{props.title}</div>
			<div className="content">{props.content}</div>
		</div>
	</div>
}

const TestimonialItem = (props) => {
	return <div className={"testimonial-item " + props.classAddon} id={props.id}>
		<img src={props.src} />
		<div className="quote">{props.quote}</div>
		<div className="speaker">- {props.speaker}</div>
	</div>
}

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			featuredWork: [
				{title: "Molar Mass Calculator", src:"/static/assets/portfolio/molarmass.png", style: {
					background: "#aaffa9",
					background: "-webkit-linear-gradient(to right, #aaffa9, #11ffbd)",
					background: "linear-gradient(to right, #aaffa9, #11ffbd)"
				}, description: "A molar mass calculator published on the app store with a clean UI and functional UX."},
				{title: "Falcotronix Website", src:"/static/assets/portfolio/falcotronix.png", style: {
					background: "#7F7FD5",
					background: "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
					background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)"
				}, description: "Website for FIRST Robotics Team"},
			],
			fullstackItems: [
				{order: 1, title: "UX Design", content: "User experience and solving your customer need."},
				{order: 2, title: "UI Design", content: "Creating aesthetically pleasing user interfaces."},
				{order: 3, title: "Front-End Development", content: "Turning your design into reality that feels good to use."},
				{order: 4, title: "Back-End Development", content: "Creating your server-side programs that connect to databases."}
			],
			testimonials: [
				{ src: "/static/assets/meCropped.jpg", quote: "\"1. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/static/assets/meCropped.jpg", quote: "\"2. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/static/assets/meCropped.jpg", quote: "\"3. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/static/assets/meCropped.jpg", quote: "\"4. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/static/assets/meCropped.jpg", quote: "\"5. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
			],
			currentTestimonialNumber: 0,
			offsetY: 0,
			modalComponent: ""
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollListener)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollListener);
	}
	scrollListener = () => {
		this.setState({
			pageYOffset: window.pageYOffset
		})
	}

	render() {
		let testimonialItem = null;
		if (this.state.currentTestimonialNumber < this.state.testimonials.length) {
			testimonialItem = this.state.testimonials[this.state.currentTestimonialNumber];
		}
		return (
			<div className="landing-page">
                <CustomHead/>
				{this.state.modalComponent}
				{getNavBar(0, true)}
				<div className="main-landing-section">
					<h1 className="title bounceIn animated">Kevin Bai</h1>
					<h2 className="subtitle bounceIn animated">Mobile and web developer</h2>
				</div>
				<AnimateScrollDiv id="tagline" className={"hovering-tagline-landing-section"} animation="bounceInLeft" scrollPercentage={0.25}>
					<p>I help you bring your project to life from the ground up.</p>
				</AnimateScrollDiv>
				<div className="about-landing-section">
					<AnimateScrollDiv id="tagline2" animation="bounceInLeft" scrollPercentage={0.25}>From <span>design</span> to <span>development</span>, you’re completely covered.</AnimateScrollDiv>
					<AnimateScrollDiv id="tagline3" animation="bounceInLeft" scrollPercentage={0.25}> I specialize in <span>mobile apps</span> and <span>websites</span>.</AnimateScrollDiv>
				</div>
				<div className="featured-landing-section">
					<h1 className="title">Featured Work</h1>
					<div className="featured-work-container">
						{this.state.featuredWork.map((workItem, i) => {
							return <AnimateScrollDiv key={i} id={"featuredWorkComponent" + i} animation={i % 2 == 0 ? "zoomInLeft" : "zoomInRight"} scrollPercentage={0.25}>
								<FeaturedWorkComponent title={workItem.title} src={workItem.src} style={workItem.style} description={workItem.description}/>
							</AnimateScrollDiv> 
						})}
					</div>
					<div className="see-all-work-button">
                        <span>
                            <Link href="/work"><a>See all work</a></Link></span></div>
				</div>
				<div className="fullstack-landing-section">
					<h1 className="title">Fullstack</h1>
					<div className="fullstack-items-container">
						{
							this.state.fullstackItems.map((item, i) => <AnimateScrollDiv key={i} id={"fullstackItem" + i} scrollPercentage={0.25} animation={i % 2 == 0 ?"rotateInUpLeft" : "rotateInUpRight"}>
									<FullstackItem order={item.order} title={item.title} content={item.content} />
								</AnimateScrollDiv>)
						}
					</div>
					{/*<div className="triangle"></div>*/}
				</div>
				{/*<div className="testimonials-landing-section">
					<div className="title">Testimonials</div>
					{
						testimonialItem != null ?
							<AnimateScrollDiv id="testimonialItem" animation={"bounceInLeft"}>
								<TestimonialItem
									src={testimonialItem.src}
									quote={testimonialItem.quote}
									speaker={testimonialItem.speaker}
								/>
							</AnimateScrollDiv>
							 : ""
					}
					<AnimateScrollDiv className="dots-view" id="dots" animation={"bounceInRight"}>
						{
							this.state.testimonials.map((_, i) => {
								return <div key={i} 
									className={i == this.state.currentTestimonialNumber ? "dot selected" : "dot"}
									onClick={(e) => this.changeSelectedTestimonial(i)}
								></div>
							})
						}
					</AnimateScrollDiv>
					</div>*/}
				<div className="contact-landing-section">
					<div className="title">Get in touch</div>
					<AnimateScrollDiv id="email-animate-container" scrollPercentage={0.25} animation="flipInX">
						<EmailComponent toggleModal={this.toggleModal}/>
					</AnimateScrollDiv>
					<div className="my-email"><a href="mailto:kevin.c.bai0@gmail.com">kevin.c.bai0@gmail.com</a></div>
					<div className="my-number">+1 (807) 633-4358</div>
					<div className="my-location">Located in 
Thunder Bay, Ontario, Canada</div>
				</div>
				<Footer />
			</div>
		)
	}
	changeSelectedTestimonial = (newNumber) => {
		// animation out
		let item = document.getElementById("testimonialItem");
		item.className = "testimonial-item";
		item.className = "testimonial-item animated zoomOut";
		setTimeout(() => {
			this.setState({
				currentTestimonialNumber: newNumber,
			}, () => {
				item.className = "testimonial-item";
				item.className = "testimonial-item animated zoomIn";
			})
		}, 500)
	}

	toggleModal(component, completion = () => {}) {
		this.setState({
			modalComponent: component
		}, completion());
	}
}

export default LandingPage;