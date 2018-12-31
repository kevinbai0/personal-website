import React from "react";
import anime from "animejs";
class MediatorSplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.comicReliefRef = React.createRef();
        this.humorRef = React.createRef();
        this.alwaysSayRef = React.createRef();
        this.voicesOpinionRef = React.createRef();
        this.peanutRef = React.createRef();
        this.contradictsRef = React.createRef();
        this.commentaryRef = React.createRef();
        this.noAuthorityRef = React.createRef();
        this.unheardRef = React.createRef();
        this.titleRef = React.createRef();
        this.openUpRef = React.createRef();
        this.linkBetweenRef = React.createRef();

        this.state = {
            animated: false
        }
    }

    componentDidMount() {
        if (this.props.state === "entered" && !this.props.isAnimated) {
            let animateAtOnce = true;
            let timeline = anime.timeline();
            
            timeline.add({
                targets: this.titleRef.current,
                opacity: [0,1],
                translateY: [-200, 0],
                duration: 3000,
                offset: 0
            }).add({
                targets: this.alwaysSayRef.current,
                scale: [0.1, 1],
                translateX: [-window.innerWidth / 2, 0],
                opacity: [0, 1],
                easing: "easeInOutQuad",
                offset: animateAtOnce ? 0 : 500,
                duration: 3000,
            }).add({
                targets: this.comicReliefRef.current,
                duration: 5000,
                translateX: [-500, 0],
                rotate: [-90, -90],
                easing: "easeInOutQuad",
                offset: animateAtOnce ? 0 : "-=1000",
                
                
            }).add({
                targets: this.humorRef.current,
                translateX: [window.innerWidth, 0],
                rotateX: [360, 0],
                duration: 3500,
                easing: "easeInOutQuad",
                offset: animateAtOnce ? 0 : "-=1000",
                
                
            }).add({
                targets: this.commentaryRef.current,
                translateX: [500, 0],
                rotate: [-359, 0],
                duration: animateAtOnce ? 5000 : 6000,
                offset: animateAtOnce ? 0 : "-=1500",
                
                
            }).add({
                targets: this.contradictsRef.current,
                translateX: [1000, 0],
                duration: 5000,
                offset: animateAtOnce ? 0 : "-=500",
                easing: "easeOutQuad",
                
                
            }).add({
                targets: this.noAuthorityRef.current,
                translateY: [-500, 0],
                rotate: [-90,-90],
                duration: 5000,
                easing: "easeOutQuad",
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.unheardRef.current,
                translateX: [500, 0],
                scale: [0.5, 1],
                easing: "easeInCubic",
                duration: 3000,
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.voicesOpinionRef.current,
                translateY: [-500, 0],
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 5000,
                offset: animateAtOnce ? 0 : "-=500",
            }).add({
                targets: this.peanutRef.current,
                translateX: [-500, 0],
                translateY: [150, 0],
                duration: 6000,
                offset: animateAtOnce ? 0 : "-=2000",
                easing: "easeInOutQuad",
            }).add({
                targets: this.openUpRef.current,
                translateY: [500, 0],
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 5000,
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.linkBetweenRef.current,
                translateX: [500, 0],
                translateY: [-150, 0],
                duration: 6000,
                offset: animateAtOnce ? 0 : "-=2000",
                easing: "easeInOutQuad",
            })
        }
    }
    render = () => {
        let classNameExtension = ""
        if (this.props.state === "exited") {
            classNameExtension = " hidden"
        }
        else if (this.props.state === "entering") {
            classNameExtension = " entering"
        }
        else if (this.props.state === "entered") {
            classNameExtension=" entering entered";
            // reposition elements
        }
        return <div className="mediator-splash-page splash-page" onClick={this.animationsFinished.bind(this)}  ref={this.props.reference}>
            <div className={"mediator" + classNameExtension} ref={this.titleRef}>The <span className="emphasis">Mediator</span></div>
            <div className={"middleman" + classNameExtension} ref={this.comicReliefRef}>Middle Man</div>
            <div className={"peace-maker" + classNameExtension} ref={this.humorRef}>Peace Maker</div>
            <div className={"speaks-truth" + classNameExtension} ref={this.alwaysSayRef}>Speaks the Truth</div>
            <div className={"in-between" + classNameExtension} ref={this.voicesOpinionRef}>The In-Between</div>
            <div className={"voice-of-society" + classNameExtension} ref={this.peanutRef}>Voice Of Society</div>
            <div className={"different-views" + classNameExtension} ref={this.contradictsRef}>Represent Different <br/>Points of View</div>
            <div className={"introduce" + classNameExtension} ref={this.commentaryRef}>Introduce</div>
            <div className={"bridge" + classNameExtension} ref={this.noAuthorityRef}>Bridge</div>
            <div className={"speak-cant" + classNameExtension} ref={this.unheardRef}>Speak for those who can't</div>
            <div className={"open-up" + classNameExtension} ref={this.openUpRef}>Open up conversation</div>
            <div className={"link-between" + classNameExtension} ref={this.linkBetweenRef}>Link <br/>between the poor and <br/> Royalty</div>

        </div>
    }

    animationsFinished() {
        this.setState({
            animated: true,
        },() => {
            this.props.animationsFinished();
        })
    }
}

export default MediatorSplashPage;