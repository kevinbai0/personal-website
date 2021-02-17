import React from "react";
import {Transition} from "react-transition-group";
import anime from "animejs";
import EvidencePage from "./EvidencePage";
import data from "../js/data";
import ConsulterSplashPage from "./ConsulterSplashPage";
import seminarStyle from "../style";

class ConsulterPage extends React.Component {
    constructor(props) {
        super(props);
        this.commentatorSplashRef = React.createRef();
        this.state = {
            isAnimated: false
        }
    }
    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    componentDidUpdate() {
        if (this.state.isAnimated) {
            console.log("Is animated");
            anime({
                targets: this.commentatorSplashRef.current,
                translateX: -window.innerWidth / 2,
                opacity: [1,0],
                duration: 4000,
                easing: "easeInOutQuad"
            })
        }
    }
    render() {
        return <div className="commentator-page">
            {seminarStyle}
            <div style={{
                opacity: this.state.isAnimated ? 1 : 0,
                transition: "all 0.5s ease"
            }}>
                {this.props.navigationBar}
            </div>
            <Transition in={!this.state.isAnimated} timeout={4000}>
                {(state) => {
                    return <ConsulterSplashPage 
                        state={state}
                        shouldAnimate={!this.state.isAnimated}
                        animationsFinished={this.animationsFinished.bind(this)} 
                        reference={this.commentatorSplashRef}
                    />
                }}
            </Transition>
            <Transition in={this.state.isAnimated} timeout={4000}>
                {(state) => <EvidencePage subprongs={data.Consulter} state={state}/>}
            </Transition>
        </div>
    }

    animationsFinished() {
        this.setState({
            isAnimated: true
        })
    }
}

export default ConsulterPage;