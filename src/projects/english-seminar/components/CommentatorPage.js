import React from "react";
import {Transition} from "react-transition-group";
import CommentatorSplashPage from "./CommentatorSplashPage";
import anime from "animejs";
import EvidencePage from "./EvidencePage";
import data from "../js/data";
import ThesisPage from "./ThesisPage";
import seminarStyle from "../style";
import NavigationBar from "./NavigationBar";
class CommentatorPage extends React.Component {
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
        console.log(this.state.isAnimated);
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
                    return <CommentatorSplashPage 
                        state={state}
                        shouldAnimate={!this.state.isAnimated}
                        animationsFinished={this.animationsFinished.bind(this)} 
                        reference={this.commentatorSplashRef}
                    />
                }}
            </Transition>
            <Transition in={this.state.isAnimated} timeout={4000}>
                {(state) => <EvidencePage subprongs={data.Commentator} state={state}/>}
            </Transition>
        </div>
    }

    animationsFinished() {
        this.setState({
            isAnimated: true
        })
        console.log("Finished");
    }
}

export default CommentatorPage;