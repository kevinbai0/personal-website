import React from "react";
import Slide from "../Slide";
import CameraShotDiv from "../CameraShotDiv";
import {toCharactersAnimation, expandedTimelineAnimation} from "../../animations/summaryPageAnimations";
import Router from "next/router";
import { prefix } from "../../config";
class SummaryPage extends React.Component {
    slideStates = {
        "introState": 0,
        "startIntoCharacters": 1,
        "showExpandedTimeline": 2,
        "zoomOutTimeline": 3,
        "showCondensedTimeline": 4,
        "timelinePlot1": 5,
        "timelinePlot2": 6,
        "timelinePlot3": 7
    }
    constructor(props) {
        super(props);
        this.state = {
            currentSlideState: 0
        }
        this.cRefs = {
            title: React.createRef(),
            subtitle: React.createRef(),
            startButton: React.createRef(),
            afterText: React.createRef(),
            cameraShot: {
                topLeft: React.createRef(),
                topRight: React.createRef(),
                bottomLeft: React.createRef(),
                bottomRight: React.createRef(),
            }
        }
    }

    componentDidUpdate() {
        let {currentSlideState} = this.state;
        if (currentSlideState === this.slideStates.startIntoCharacters) {
            toCharactersAnimation(this.cRefs);
        }
        else if (currentSlideState === this.slideStates.showExpandedTimeline) {
            expandedTimelineAnimation(this.cRefs, () => {
                Router.push(prefix + "/summary/timeline");
            });
        }
    }
    render() {
        return (
            <Slide className="summary-page" onClick={() => this.updateSlideState()}>
                <CameraShotDiv color={"#333333"} specificRefs={this.cRefs.cameraShot}/>
                <div className="content" style={{overflow: "scroll"}}>
                    <div className="title" ref={this.cRefs.title}>Summary</div>
                    <div className="subtitle" ref={this.cRefs.subtitle}>A Fine Balance</div>
                    
                    <div className="start-button" ref={this.cRefs.startButton}>
                        <div>Start</div>
                        <div className="after-text hidden" ref={this.cRefs.afterText}>
                            <div className="person-1">Dina</div>
                            <div className="person-2">Ishvar & Om</div>
                            <div className="person-3">Maneck</div>
                        </div>
                    </div>
                    
                </div>
            </Slide>
        )
    }

    updateSlideState = () => {
        if (this.state.currentSlideState !== this.slideStates["timelinePlot3"] 
            || this.state.currentSlideState !== this.slideStates["showExpandedTimeline"] 
            || this.state.currentSlideState !== this.slideStates["zoomOutTimeline"]) {
            this.setState({
                currentSlideState: this.state.currentSlideState + 1
            })
        }
    }
}

export default SummaryPage;