import React from "react";
import Slide from "../Slide";
import anime from "animejs";
import CameraShotDiv from "../CameraShotDiv";
import Router from "next/router";

class WorksCitedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
        this.titleRef = React.createRef();
        this.subprongRef = React.createRef();
        this.topHalfRef = React.createRef();
        this.cameraRefs = {
            topLeft: React.createRef(),
            topRight: React.createRef(),
            bottomLeft: React.createRef(),
            bottomRight: React.createRef()
        }
    }
    componentDidMount() {
        let timeline = anime.timeline();
            timeline.add({
                targets: this.cameraRefs.topLeft.current,
                translateX: [-500, 0],
                translateY: [-500, 0],
                duration: 1000,
                offset: 200,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.topRight.current,
                translateX: [500, 0],
                translateY: [-500, 0],
                duration: 1000,
                offset: 200,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.bottomLeft.current,
                translateX: [-500, 0],
                translateY: [500, 0],
                duration: 1000,
                offset: 200,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.bottomRight.current,
                translateX: [500, 0],
                translateY: [500, 0],
                duration: 1000,
                offset: 200,
                easing: "easeInOutQuad",
            }).add({
                targets: this.topHalfRef.current,
                scaleY: [2, 1],
                duration: 1000,
                easing: "easeInOutQuad"
            }).add({
                targets: [this.titleRef.current],
                opacity: [0,1],
                duration: 500,
                offset: "-=500",
                easing: "easeInOutQuad"
            })
    }
    componentDidUpdate() {
        if (this.state.clicks ===  1) {
            let timeline = anime.timeline();
            timeline.add({
                targets: this.cameraRefs.topLeft.current,
                translateX: -500,
                translateY: -500,
                duration: 1000,
                offset: 0,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.topRight.current,
                translateX: 500,
                translateY: -500,
                duration: 1000,
                offset: 0,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.bottomLeft.current,
                translateX: -500,
                translateY: 500,
                duration: 1000,
                offset: 0,
                easing: "easeInOutQuad",
            }).add({
                targets: this.cameraRefs.bottomRight.current,
                translateX: 500,
                translateY: 500,
                duration: 1000,
                offset: 0,
                easing: "easeInOutQuad",
            }).add({
                targets: this.topHalfRef.current,
                scaleY: [1,0],
                duration: 500,
                easing: "easeInOutSine"
            }).add({
                targets: this.titleRef.current,
                translateY: ["-50%", "-150%"],
                scale: 0.3,
                duration: 1000
            }).add({
                targets: this.subprongRef.current,
                opacity: [0,1],
                translateY: [500, 0],
                duration: 1000,
            })
            timeline.finished.then(() => {
                if (this.props.nextRoute) {
                    Router.push(this.props.nextRoute);
                }
            })
        }
    }
    render() {
        let {title, subprong} = this.props;
        return <Slide className="prong-intro-page" backgroundColor="#AE5BF5" onClick={() => this.clickHandler()}>
            <CameraShotDiv specificRefs={this.cameraRefs}/>
            <div className="bottom-half"></div>
            <div className="top-half" ref={this.topHalfRef}></div>
            <div className="title" ref={this.titleRef}>Works Cited</div>
            <div className="works-cited-content" style={{
                color: "white",
                fontSize: "2vw",
                position: "absolute",
                top: "40%",
                left: "20%",
                opacity: 0
            }} ref={this.subprongRef}>
                <div style={{margin: "0 0 2vw"}}>Hosseini, Khaled. The Kite Runner. Anchor Canada, 2004.</div>
                <div>Mistry, Rohinton. A Fine Balance. The Canadian Publishers, 1997.</div>
            </div>
        </Slide>
    }

    clickHandler() {
        if (this.state.clicks < 1) {
            this.setState({clicks: this.state.clicks + 1});
        }
    }
}

export default WorksCitedPage;