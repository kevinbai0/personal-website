import React from "react";
import Slide from "../Slide";
import anime from "animejs";
import CameraShotDiv from "../CameraShotDiv";
import Router from "next/router";
import { prefix } from "../../config";

class ProngIntroductionPage extends React.Component {
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
            targets: this.titleRef.current,
            opacity: [0,1],
            duration: 500,
            offset: "-=500",
            easing: "easeInOutQuad"
        })
    }
    componentDidUpdate() {
        if (this.state.clicks === 1) {
            anime({
                targets: this.titleRef.current,
                translateY: ["-50%", "-100%"],
                duration: 1000
            })
            anime({
                targets: this.subprongRef.current,
                opacity: [0,1],
                translateY: ["100%", "0%"],
                duration: 1000
            })
        }
        else if (this.state.clicks ===  2) {
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
                duration: 1000,
                easing: "easeInOutSine"
            }).add({
                targets: this.titleRef.current,
                translateY: ["-150%"],
                scale: 0.5,
                duration: 1000
            }).add({
                targets: this.subprongRef.current,
                translateY: ["-175%"],
                offset: "-= 1000",
                scale: 0.5,
                duration: 1000
            })
            timeline.finished.then(() => {
                if (this.props.nextRoute) {
                    Router.push(prefix + this.props.nextRoute);
                }
            })
        }
    }
    render() {
        let {title, firstSubprong} = this.props;
        return <Slide className="prong-intro-page" backgroundColor="#AE5BF5" onClick={() => this.clickHandler()}>
            <CameraShotDiv specificRefs={this.cameraRefs}/>
            <header>Archetype of the Villain <br/><span className="light">in</span> <span className="dark">{this.props.novel}</span></header>
            <div className="bottom-half"></div>
            <div className="top-half" ref={this.topHalfRef}></div>
            <div className="title" ref={this.titleRef}>{title}</div>
            <div className="subprong" ref={this.subprongRef}>{firstSubprong}</div>
        </Slide>
    }

    clickHandler() {
        if (this.state.clicks < 2) {
            this.setState({clicks: this.state.clicks + 1});
        }
    }
}

export default ProngIntroductionPage;