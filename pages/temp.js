import React from "react";
import "../isu-seminar/CustomHead";
import Slide from "../isu-seminar/Slide";
import CameraShotDiv from "../isu-seminar/CameraShotDiv";
import anime from "animejs";
import Router from "next/router";


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.LANDING_STATE = "Landing";
        this.PLAYING_VIDEO = "Video";
        this.FINISHED_VIDEO = "Finished";
        this.state = {
            currentState: this.LANDING_STATE
        }
        this.topHalfRef = React.createRef();
        this.bottomHalfRef = React.createRef();
        this.videoRef = React.createRef();
        this.titleRef = React.createRef();
        this.kiteRunnerRef = React.createRef();
        this.fineBalanceRef = React.createRef();
    }

    componentDidMount() {
        this.videoRef.current.onended = () => {
            this.setState({
                currentState: this.FINISHED_VIDEO
            })
        }
    }

    componentDidUpdate() {
        if (this.state.currentState === this.PLAYING_VIDEO){
             anime({
                targets: [this.topHalfRef.current, this.bottomHalfRef.current],
                duration: 2000,
                scaleY: 0,
                easing: "easeInOutQuad"
            })
            anime({
                targets: [this.titleRef.current, this.kiteRunnerRef.current, this.fineBalanceRef.current],
                duration: 1000,
                opacity: 0,
                easing: "easeInOutCubic",
                delay: 3000,
                complete: () => {
                    this.videoRef.current ? this.videoRef.current.className = "intro-video" : "";
                }
            })
        }
        else if (this.state.currentState === this.FINISHED_VIDEO) {
            anime({
                targets: [this.titleRef.current],
                duration: 1000,
                opacity: [0,1],
                easing: "easeInOutCubic",
                delay: 1000,
                complete: () => {
                    this.videoRef.current ? this.videoRef.current.className = "intro-video blurred" : "";
                }
            })
        }
    }
    render() {
        return (
            <Slide className="landing-page" onClick={() => this.handleSlideClick()} backgroundColor={"black"}>
                <video className="intro-video blurred" ref={this.videoRef}>
                    <source src="/static/english-video.mp4" type="video/mp4"/>
                </video>
                <CameraShotDiv />
                <div className="top-half" ref={this.topHalfRef}></div>
                <div className="bottom-half" ref={this.bottomHalfRef}></div>
                <div className="a-fine-balance--title" ref={this.fineBalanceRef} style={{
                    position: "absolute",
                    left: "15%",
                    top: "12vw",
                    color: "white",
                    fontSize: "3vw"
                }}>A Fine Balance</div>
                <div className="kite-runner-title" ref={this.kiteRunnerRef} style={{
                    position: "absolute",
                    right: "15%",
                    bottom: "12vw",
                    color: "white",
                    fontSize: "3vw"
                }}>The Kite Runner</div>
                <div className="title-border" ref={this.titleRef}>
                    <div className="title">{this.state.currentState === this.FINISHED_VIDEO ? "Discussion" : "Villains"}</div>
                </div>
            </Slide>
        )
    }

    handleSlideClick() {
        if (this.state.currentState == this.LANDING_STATE) {
            // expand video
            this.setState({
                currentState: this.PLAYING_VIDEO
            },() => {
                this.videoRef.current.play();
            })
        }
        else {
            // change slide to next
        }
    }
}

export default LandingPage;
