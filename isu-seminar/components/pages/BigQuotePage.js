import React from "react";
import Slide from "../Slide";
import anime from "animejs";
import CameraShotDiv from "../CameraShotDiv";
import Router from "next/router";
import { prefix } from "../../config";

class BigQuotePage extends React.Component {
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
        this.quoteSymbolRef = React.createRef();
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
                targets: [this.titleRef.current, this.quoteSymbolRef.current, this.subprongRef.current],
                opacity: [0,1],
                duration: 1000,
                offset: "-= 500",
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
                scaleY: [1,2],
                duration: 500,
                easing: "easeInOutSine"
            }).add({
                targets: [this.titleRef.current, this.quoteSymbolRef.current, this.subprongRef.current],
                opacity: [1,0],
                duration: 500,
                offset: "-= 500",
                easing: "easeInOutSine"
            })
            timeline.finished.then(() => {
                if (this.props.nextRoute) {
                    Router.push(prefix + this.props.nextRoute);
                }
            })
        }
    }
    render() {
        let {title, subprong} = this.props;
        return <Slide className="prong-intro-page" backgroundColor="#AE5BF5" onClick={() => this.clickHandler()}>
            <CameraShotDiv specificRefs={this.cameraRefs}/>
            <header>Archetype of the Villain <br/><span className="light">in</span> <span className="dark">{this.props.novel}</span></header>
            <div className="bottom-half"></div>
            <div className="top-half" ref={this.topHalfRef}></div>
            <div className="quote-symbol" ref={this.quoteSymbolRef} style={{
                fontSize: "20vw",
                fontFamily: "Nunito",
                fontWeight: 900,
                position: "absolute",
                left: "5vw",
                top: 0,
                color: "white"
            }}>“</div>
            <div className="title" style={{fontSize: "6vw", width: "90%", left:"5%"}}ref={this.titleRef}>{title}</div>
            <div className="quote-author" style={{
                fontSize: "6vw",
                color: "white",
                position: "absolute",
                bottom: "10%",
                right: "10%",
                opacity: 1
            }} ref={this.subprongRef}>{subprong}</div>
        </Slide>
    }

    clickHandler() {
        if (this.state.clicks < 1) {
            this.setState({clicks: this.state.clicks + 1});
        }
    }
}

export default BigQuotePage;