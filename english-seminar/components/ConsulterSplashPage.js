import React from "react";
import anime from "animejs";
class ConsulterSplashPage extends React.Component {
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
        this.pointsFaultsRef = React.createRef();
        this.cooperativeRef = React.createRef();
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
                translateX: [-2 * window.innerWidth, 0],
                duration: animateAtOnce ? 3000 : 4000,
                offset: animateAtOnce ? 0 : "-=1500",
                easing: "easeInQuad",
                
                
            }).add({
                targets: this.contradictsRef.current,
                translateX: [1000, 0],
                duration: 5000,
                offset: animateAtOnce ? 0 : "-=500",
                easing: "easeOutQuad",
                
                
            }).add({
                targets: this.noAuthorityRef.current,
                translateY: [-500, 0],
                duration: 5000,
                easing: "easeOutQuad",
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.unheardRef.current,
                translateX: [500, 0],
                scale: [0.5, 1],
                rotate: [-90, -90],
                easing: "easeInCubic",
                duration: 3000,
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.voicesOpinionRef.current,
                translateY: [500, 0],
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 5000,
                offset: animateAtOnce ? 0 : "-=500",
                
                
            }).add({
                targets: this.peanutRef.current,
                translateX: [-window.innerWidth, 0],
                translateY: [150, 0],
                duration: 6000,
                offset: animateAtOnce ? 0 : "-=2000",
                easing: "easeInOutQuad",
            }).add({
                targets: this.pointsFaultsRef.current,
                translateX: [-500, 0],
                translateY: [150, 0],
                rotate: [-90, -90],
                duration: 3000,
                offset: animateAtOnce ? 0 : "-=500"
            }).add({
                targets: this.cooperativeRef.current,
                translateX: [500, 0],
                translateY: [150, 0],
                duration: 3000,
                offset: animateAtOnce ? 0 : "-=500"
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
        return <div className="consulter-splash-page splash-page" onClick={this.animationsFinished.bind(this)}  ref={this.props.reference}>
            <div className={"consulter" + classNameExtension} ref={this.titleRef}>The <span className="emphasis">Consulter</span></div>
            <div className={"paradox-wise" + classNameExtension} ref={this.comicReliefRef}>Paradoxically Wise</div>
            <div className={"wise" + classNameExtension} ref={this.humorRef}>Wise</div>
            <div className={"points-faults" + classNameExtension} ref={this.pointsFaultsRef}>Points Out Faults</div>
            <div className={"protective" + classNameExtension} ref={this.alwaysSayRef}>Protective</div>
            <div className={"loyal" + classNameExtension} ref={this.voicesOpinionRef}>Loyal</div>
            <div className={"mentor" + classNameExtension} ref={this.peanutRef}>Mentor</div>
            <div className={"honest" + classNameExtension} ref={this.contradictsRef}>Honest</div>
            <div className={"cooperative" + classNameExtension} ref={this.cooperativeRef}>Cooperative</div>
            <div className={"knowledgable" + classNameExtension} ref={this.commentaryRef}>Knowledgable Insight</div>
            <div className={"advocate" + classNameExtension} ref={this.noAuthorityRef}>King's Advocate</div>
            <div className={"states-obvious" + classNameExtension} ref={this.unheardRef}>States the obvious</div>
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

export default ConsulterSplashPage;