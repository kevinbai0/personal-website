import React from "react";
import anime from "animejs";
import ScrollButton from "./ScrollButton";
import ThesisPage from "./ThesisPage";
import Water from "../water";
import { Transition } from "react-transition-group";
import VideoModal from "./VideoModal";
import seminarStyle from "../style";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presentationStarted: false,
            scrollState: "noscroll",
            shouldPlayMusic: false
        }
        this.water = new Water();
        this.water.onScroll = this.handleScroll.bind(this);
        this.titleRef = React.createRef();
        this.subtitleRef = React.createRef();
    }
    componentDidMount() {
        this.water.mount();
        this.water.add({
            target: this.titleRef,
            keyframes: {
                opacity: [1,0.37],
                translateY: [0, window.innerHeight / 2]
            }
        }).add({
            target: this.subtitleRef,
            keyframes: {
                opacity: [0.37, 1],
                translateY: [0, window.innerHeight * 3/4]
            }
        })
    }
    componentWillUnmount() {
        this.water.unmount();
    }

    render() {
        return <div className="landing-page">
            {seminarStyle}
            { this.props.navigationBar }
            <div className="title" ref={this.titleRef}>The Chorus and the Fool</div> 
            <div className="sub-title" ref={this.subtitleRef}>In Oedipus the King and King Lear</div>
            <VideoModal onClick={this.startMusic.bind(this)} shouldShow={this.state.shouldPlayMusic} stopMusic={() => this.stopMusic()} src="/song.m4v" type="/video/mp4" />
            
            <Transition in={this.state.scrollState === "noscroll"} timeout={1000}>
                {(state) =>  <div className={"start-button " + state} onClick={this.startPresentation.bind(this)}>Start Presentation</div>}
            </Transition>
            <Transition in={this.state.scrollState === "scrolling"} timeout={1000}>
                {(state) => <ScrollButton state={state} onClick={() => this.leaveHomeScreen()}/>}
            </Transition>

            <ThesisPage 
                onChooseProng={(prong) => this.onChooseProng(prong)} 
                currentProng={this.state.currentProng} 
                scrollState={this.state.scrollState} 
            />
        </div>
    }

    startMusic() {
        if (!this.state.shouldPlayMusic) {
            this.setState({
                shouldPlayMusic: true
            })
        }
    }
    stopMusic() {
        if (this.state.shouldPlayMusic) {
            this.setState({
                shouldPlayMusic: false
            })
        }
    }

    prevScrollPos = 0;
    handleScroll(event) {
        // scrolling down
        if (!window) return;
        if (this.prevScrollPos < window.pageYOffset) {
            if (this.state.scrollState === "noscroll") {
                this.setState({
                    scrollState: "scrolling"
                })
            }
            else if (this.state.scrollState === "scrolling" && window.pageYOffset >= window.innerHeight * 2 / 3) {
                this.setState({
                    scrollState: "scrolled"
                })
            }
        }
        // scrolling up
        else {
            if (this.state.scrollState === "scrolled" && window.pageYOffset <= window.innerHeight / 2) {
                this.setState({
                    scrollState: "scrolling"
                })
            }
            else if (this.state.scrollState === "scrolling" && window.pageYOffset <= 20) {
                this.setState({
                    scrollState: "noscroll"
                })
            }
        }
        
        this.prevScrollPos = window.pageYOffset;
    }
    updateScrollState = (value) => {
        if (this.state.scrollState === value) return;
        this.setState({
            scrollState: value
        })
    }

    componentDidUpdate() {
        if (!window) return;
        if (this.state.currentProng === "Commentator" && this.state.firstUpdate) {
            window.scroll({top: window.innerHeight, behavior: "smooth"});
        }
    }

    startPresentation() {
        if (!window) return;
        window.scrollTo({top: window.innerHeight * 0.6, behavior: "smooth"});
        this.setState({
            presentationStarted: true
        })
    }
    leaveHomeScreen() {
        // scroll down
        if (!window) return;
        window.scrollTo({top: window.innerHeight * 1.6, behavior: "smooth"});
        this.updateScrollState("scrolling");
        setTimeout(() => {
            this.updateScrollState("scrolled");
        }, 500);
    }   
}

export default LandingPage;