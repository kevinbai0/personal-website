import React from "react";
import Slide from "../Slide";
import {introTransition} from "../../animations/timelineAnimations";
import anime from "animejs";

import Router from "next/router";
import Timeline from "../Timeline";
import { prefix } from "../../config";
class SummaryTimelinePage extends React.Component {
    slideStates = {
        "introState": 0,
        "showExpandedTimeline": 1,
        "showCondensedTimeline": 2,
        "finishedCondensedTimeline": 3
    }
    constructor(props) {
        super(props);
        this.state = {
            currentSlideState: props.shouldSkipExpand ? 1 : 0
        }
        this.cRefs = {
            characters: {
                dina: React.createRef(),
                ishvarAndOm: React.createRef(),
                maneck: React.createRef()
            },
            timelineTitle: React.createRef(),
            timelineSection: React.createRef()
        }
    }
    componentDidUpdate() {
        let {currentSlideState} = this.state;
        if (currentSlideState === this.slideStates.finishedCondensedTimeline) {
            anime({
                targets: [this.cRefs.characters.maneck.current, this.cRefs.characters.dina.current],
                duration: 1000,
                delay: 1000,
                opacity: 0,
                easing: "easeInOutCubic"
            })
            anime({
                targets: [this.cRefs.characters.ishvarAndOm.current],
                duration: 1000,
                delay: 1000,
                scale: 1.5,
                easing: "easeInOutCubic"
            })
        }
    }
    componentDidMount() {
        introTransition(this.cRefs, () => {
            // animate timeline
            this.setState({
                currentSlideState: this.state.currentSlideState + 1
            })
        });
    }
    render() {
        return (
            <Slide className="timeline-page" onClick={() => this.updateSlideState()} setFullScreen>
                <div className="characters-list">
                    <div className="character-container" ref={this.cRefs.characters.dina}>
                        <div className="character-circle">
                            Dina
                        </div>
                        <div className="character-occupation">Widow / Landlord</div>
                    </div>
                    <div className="character-container" ref={this.cRefs.characters.ishvarAndOm}>
                        <div className="character-circle">
                            Ishvar<br/>&<br/>Om
                        </div>
                        <div className="character-occupation">Tailors</div>
                    </div>
                    <div className="character-container" ref={this.cRefs.characters.maneck}>
                        <div className="character-circle">
                            Maneck
                        </div>
                        <div className="character-occupation">College Student</div>
                    </div>
                </div>
                <div className="timeline-title" ref={this.cRefs.timelineTitle}>Timeline</div>
                <Timeline 
                    shouldPan={this.state.currentSlideState === this.slideStates["showExpandedTimeline"]}
                    shouldCondense={this.state.currentSlideState === this.slideStates["showCondensedTimeline"]}
                    timelineItems={[
                    {
                        excerpt: "Dina begins contracting for Export Company",
                        chapters: "I & II",
                        chapterName: "City by the Sea"
                    },
                    {
                        excerpt: "Om and Ishvar’s background village",
                        chapters: "III",
                        chapterName: "In a Village by the River"
                    },
                    {
                        excerpt: "Om and Ishvar first begin working for Dina",
                        chapters: "IV",
                        chapterName: "Small Obstacles"
                    },
                    {
                        excerpt: "Maneck at boarding school",
                        chapters: "V",
                        chapterName: "Mountains"
                    },
                    {
                        excerpt: "Om and Ishvar begin settling down at the city, while bonds begin to form",
                        chapters: "VI & VII",
                        chapterName: "On the Move",
                    },
                    {
                        excerpt: "Om and Ishvar are taken as slaves",
                        chapters: "VIII & IX",
                        chapterName: "Beautification",
                    },
                    {
                        excerpt: "The four become a family",
                        chapters: "X, XI, XII & XIII",
                        chapterName: "Sailing Under One Flag",
                    },
                    {
                        excerpt: "As Om and Ishvar return to their village, Om is castrated, and Ishvar is amputated",
                        chapters: "XIV & XV",
                        chapterName: "Return of Solitude",
                    },
                    {
                        excerpt: "Om and Ishvar return to the city as beggars since Dina loses her flat",
                        chapters: "XVI",
                        chapterName: "The Circle is Completed",
                    },
                ]}
                reference={this.cRefs.timelineSection}
                condensedIndexes={this.props.customCondensed ? this.props.customCondensed : [1, 6, 7]}
                completedCondensation={() => this.completedTimelineCondensation()}
            />
            </Slide>
        )
    }

    completedTimelineCondensation = () => {
        this.updateSlideState();
    }
    updateSlideState = () => {
        if (this.state.currentSlideState !== this.slideStates.finishedCondensedTimeline) {
            this.setState({
                currentSlideState: this.state.currentSlideState + 1
            })
        }
        else {
            Router.push(this.props.nextRoute ? prefix + this.props.nextRoute  : prefix + "/summary/sub-timeline1")
        }
    }
}

export default SummaryTimelinePage;