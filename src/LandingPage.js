import React, {Component} from "react";
import Footer from "./Footer";
import "animate.css";
import NavigationBar from "./NavigationBar";

const FeaturedWorkItem = (props) => {
	return <div id={props.id} className={"featured-work-item " + props.classAddon}>
		<div className="featured-image-container" style={props.style}>
			<img className="featured-image" src={props.src}/>
		</div>
		<div className="info">
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
		</div>	
	</div>
}

const FullstackItem = (props) => {
	return <div id={props.id} className={"fullstack-item " + props.classAddon}>
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

const EmailComponent = (props) => {
	return <div className="enter-email-view">
		<input type="text" className="email-input" placeholder="Email"/>
		<div className="send-button">
			Send
		</div>
	</div>
}

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			featuredWork: [
				{title: "Molar Mass Calculator", src:"/assets/portfolio/molarmass.png", style: {
					background: "#aaffa9",
					background: "-webkit-linear-gradient(to right, #aaffa9, #11ffbd)",
					background: "linear-gradient(to right, #aaffa9, #11ffbd)"
				}, description: "A molar mass calculator published on the app store with a clean UI and functional UX."},
				{title: "Falcotronix Website", src:"/assets/portfolio/falcotronix.png", style: {
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
				{ src: "/assets/meCropped.jpg", quote: "\"1. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/assets/meCropped.jpg", quote: "\"2. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/assets/meCropped.jpg", quote: "\"3. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/assets/meCropped.jpg", quote: "\"4. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
				{ src: "/assets/meCropped.jpg", quote: "\"5. Written testimonials from customers. Cool stuff, I know get some good stuff written about me to put on here and that would be great!\"", speaker: "Kevin Bai" },
			],
			currentTestimonialNumber: 0,
			classes: {
				tagline: "hidden",
				tagline2: "hidden",
				tagline3: "hidden",
				featuredWorkItem: [],
				fullstackItems: [],
				testimonial: "hidden",
				dots: "hidden"
			}
		}
	}

	componentDidMount() {
		let newClasses = this.state.classes;
		for (var i = 0; i < this.state.featuredWork.length; i++) {
			newClasses.featuredWorkItem.push("hidden");
		}
		this.state.fullstackItems.forEach(() => newClasses.fullstackItems.push("hidden"));
		this.setState({
			classes: newClasses
		})
		window.addEventListener("scroll", (e) => {
			let newClasses = this.state.classes;
			var change = false;
			if (document.getElementById("tagline") == null) return;
			const taglineRect = document.getElementById("tagline").getBoundingClientRect();
			const tagline2Rect = document.getElementById("tagline2").getBoundingClientRect();
			const tagline3Rect = document.getElementById("tagline3").getBoundingClientRect();
			const testimonialRect = document.getElementById("testimonialItem").getBoundingClientRect();
			const dotsRect = document.getElementById("dots").getBoundingClientRect();

			const taglineOffset = window.innerHeight - (taglineRect.y + window.pageYOffset);
			const tagline2Offset = tagline2Rect.y + window.pageYOffset - window.innerHeight + window.innerHeight / 4;
			const tagline3Offset = tagline3Rect.y + window.pageYOffset - window.innerHeight + window.innerHeight / 4;
			const testomonialOffset = testimonialRect.y + window.pageYOffset - window.innerHeight + testimonialRect.height / 3;
			const dotsOffset = dotsRect.y + window.pageYOffset - window.innerHeight + dotsRect.height / 3;


			change = this.updateTag(newClasses, "tagline", taglineOffset, "bounceInLeft") ? true : change;
			change = this.updateTag(newClasses, "tagline2", tagline2Offset, "bounceInLeft") ? true : change;
			change = this.updateTag(newClasses, "tagline3", tagline3Offset, "bounceInLeft") ? true : change;
			change = this.updateTag(newClasses, "testimonial", testomonialOffset, "slideInRight") ? true : change;
			change = this.updateTag(newClasses, "dots", dotsOffset, "slideInLeft") ? true : change;


			this.state.featuredWork.forEach((workItem, i) => {
				let elem = document.getElementById("featuredWorkItem" + i).getBoundingClientRect();
				let elemOffset = elem.y + window.pageYOffset - window.innerHeight + elem.height / 3;
				change = this.updateSubTag(newClasses, "featuredWorkItem", i, elemOffset, i % 2 == 0 ? "zoomInLeft" : "zoomInRight") ? true : change;
			})
			this.state.fullstackItems.forEach((_, i) => {
				let elem = document.getElementById("fullstackItem" + i).getBoundingClientRect();
				let elemOffset = elem.y + window.pageYOffset - window.innerHeight + elem.height / 2;
				change = this.updateSubTag(newClasses, "fullstackItems", i, elemOffset, i % 2 == 0 ? "rotateInUpLeft" : "rotateInUpRight") ? true : change;
			})

			if (change) {
				this.setState({
					classes: newClasses
				})
			}
		})
	}
	updateTag = (newClasses, tag, scrollPosition, animation) => {
		if (window.pageYOffset > scrollPosition) {
			if (newClasses[tag] === "hidden") {
				newClasses[tag] = "animated " + animation;
				return true;
			}
		}
		return false;
	}
	updateSubTag = (newClasses, tagGroup, index, scrollPosition, animation) => {
		if (window.pageYOffset > scrollPosition) {
			if (newClasses[tagGroup][index] === "hidden") {
				newClasses[tagGroup][index] = "animated " + animation;
				console.log(newClasses[tagGroup][index]);
				return true;
			}
		}
		return false;
	}

	render() {
		let testimonialItem = null;
		if (this.state.currentTestimonialNumber < this.state.testimonials.length) {
			testimonialItem = this.state.testimonials[this.state.currentTestimonialNumber];
		}
		return (
			<div className="landing-page">
				{this.props.navigationBar}
				<div className="main-landing-section">
					<h1 className="title bounceIn animated">Kevin Bai</h1>
					<h2 className="subtitle bounceIn animated">Mobile and web developer</h2>
				</div>
				<div id="tagline" className={"hovering-tagline-landing-section " + this.state.classes.tagline}>
					<p>I help you bring your project to life from the ground up.</p>
				</div>
				<div className="about-landing-section">
					<p className={this.state.classes.tagline2} id="tagline2">From <span>design</span> to <span>development</span>, you’re completely covered.</p>
					<p className={this.state.classes.tagline3} id="tagline3"> I specialize in <span>mobile apps</span> and <span>websites</span>.</p>
				</div>
				<div className="featured-landing-section">
					<h1 className="title">Featured Work</h1>
					<div className="featured-work-container">
						{this.state.featuredWork.map((workItem, i) => {
							return <FeaturedWorkItem key={i} title={workItem.title} src={workItem.src} style={workItem.style} description={workItem.description} classAddon={this.state.classes.featuredWorkItem[i]} id={"featuredWorkItem" + i}/>
						})}
					</div>
					<div className="see-all-work-button"><span>See all work</span></div>
				</div>
				<div className="fullstack-landing-section">
					<h1 className="title">Fullstack</h1>
					<div className="fullstack-items-container">
						{
							this.state.fullstackItems.map((item, i) => <FullstackItem key={i} order={item.order} title={item.title} content={item.content} classAddon={this.state.classes.fullstackItems[i]} id={"fullstackItem" + i}/>)
						}
					</div>
					<div className="triangle"></div>
				</div>
				<div className="testimonials-landing-section">
					<div className="title">Testimonials</div>
					{
						testimonialItem != null ?
							<TestimonialItem
								id="testimonialItem"
								classAddon={this.state.classes.testimonial}
								src={testimonialItem.src}
								quote={testimonialItem.quote}
								speaker={testimonialItem.speaker}
							/> : ""
					}
					<div className={"dots-view " + this.state.classes.dots} id="dots">
						{
							this.state.testimonials.map((_, i) => {
								return <div key={i} 
									className={i == this.state.currentTestimonialNumber ? "dot selected" : "dot"}
									onClick={(e) => this.changeSelectedTestimonial(i)}
								></div>
							})
						}
					</div>
				</div>
				<div className="contact-landing-section">
					<div className="title">Get in touch</div>
					<EmailComponent />
					<div className="my-email">me@kevinbai.design</div>
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
}

export default LandingPage;