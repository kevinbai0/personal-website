import React from "react";
import Slide from "../Slide";
import anime from "animejs";
import Router from "next/router";
import { prefix } from "../../config";

class ThesisPage extends React.Component {
    constructor(props) {
        super(props);
        this.svgPathRef = React.createRef();
        this.prong1Ref = React.createRef();
        this.prong2Ref = React.createRef();
        this.prong3Ref = React.createRef();
        this.state = {
            clicks: 0
        }
    }

    componentDidUpdate() {
        let changedProng1 = false;
        let changedProng2 = false;
        let changedProng3 = false;
        if (this.state.clicks === 1) {
            anime({
                targets: this.svgPathRef.current,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                delay: 1000,
                duration: 3000,
                update: (anim) => {
                    if (anim.currentTime > 1600 && !changedProng1) {
                        this.prong1Ref.current.className = "prong prong-1";
                        changedProng1 = true;
                    }
                    else if (anim.currentTime > 2600 && !changedProng2) {
                        this.prong2Ref.current.className = "prong prong-2";
                        changedProng2 = true;
                    }
                    else if (anim.currentTime > 3600 && !changedProng3) {
                        this.prong3Ref.current.className = "prong prong-3";
                        changedProng3 = true;
                    }
                }
            });
        }
    }
    render() {
        return <Slide className="thesis-page" onClick={() => this.handleSlideClick()}>
            <div className="title">
                Thesis
                <div className="underline"></div>
            </div>
            <div className="thesis-body">
                <div className="thesis-statement">In both novels, Assef and Thakur Dharamsi <span>fit</span> the archetype of the <span>villain</span>.</div>
                {
                    this.state.clicks > 0 && <svg viewBox="0 0 946.5 166.5" className="svg-path">
                        <path ref={this.svgPathRef}id="Path_1" data-name="Path 1" fill="none" stroke="#333333" d="M1943.5,667.5v39.711h294.4v60.332h421.01V832.98H2888.9" transform="translate(-1943 -667.5)"/>
                    </svg>
                }
                <div className="prong prong-1 hidden" ref={this.prong1Ref}>1. Evil</div>
                <div className="prong prong-2 hidden" ref={this.prong2Ref}>2. Powerful</div>
                <div className="prong prong-3 hidden" ref={this.prong3Ref}>3. Corrupt</div>
            </div>
        </Slide>
    }

    handleSlideClick() {
        if (this.state.clicks === 0) {
            this.setState({
                clicks: 1
            })
        }
        else {
            if (this.props.nextRoute) {
                Router.push(prefix + this.props.nextRoute);
            }
        }
    }
}

export default ThesisPage;