import React from "react";
import anime from "animejs";

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.nodeRefs = props.timelineItems.map(item => React.createRef());
        this.state = {
            shouldFilter: false,
            shouldRemovedFiltered: false,
            shouldCondense: true
        }
        this.reached = false;
    }
    componentDidUpdate() {
        let maxOffset = this.nodeRefs[this.props.timelineItems.length - 1].current.offsetLeft;
        if (this.props.shouldPan) {
            anime({
                targets: this.nodeRefs.map(ref => ref.current),
                translateX: -maxOffset + window.innerWidth * 3 / 4,
                duration: 20000,
                easing: "easeInOutQuad"
            })
        }
        else if (this.props.shouldCondense && !this.state.shouldFilter) {
            let promises = []
            this.nodeRefs.forEach((ref, i) => {
                let animation = new Promise((resolve, reject) => {
                    let anim = anime({
                        targets: ref.current,
                        translateX: (i / (this.nodeRefs.length - 1)) * (-maxOffset + window.innerWidth * 3 / 4),
                        duration: 1000,
                        easing: "easeInOutQuad"
                    })
                    anim.finished.then(resolve);
                });
                promises.push(animation);
            })
            // after completed animation, filter the ones that are uncondensed
            Promise.all(promises).then(() => {
                setTimeout(() => {
                    this.setState({ shouldFilter: true });
                }, 1000)
            })
        }

        if (this.state.shouldFilter && this.state.shouldCondense) {
            let newRefs = this.nodeRefs.filter((_, i) => this.props.condensedIndexes.find((index) => index === i));
            if (newRefs.length > 1) {
                let ref = newRefs.length === 2 ? newRefs[0] : newRefs[1];
                anime({
                    targets: ref.current,
                    translateX: -ref.current.offsetLeft + window.innerWidth / 2 - ref.current.offsetWidth / 2,
                    duration: 500,
                    easing: "easeInOutQuad",
                    complete: () => {
                        if (this.reached) return;
                        this.reached = true;
                        this.props.completedCondensation();
                        this.setState({
                            shouldCondense: false
                        })
                    }
                })
            }
            else {
                setTimeout(() => {
                    if (this.reached) return;
                    this.reached = true;
                    this.props.completedCondensation();
                    this.setState({
                        shouldCondense: false
                    })
                }, 1000);
            }
            
        }
    }
    render() {
        let {shouldCondense} = this.props;

        return (
            <div className="timeline" ref={this.props.reference}>
                <div className="timeline-line">
                    {
                        
                        this.props.timelineItems.map((item, i) => {
                            let className = shouldCondense && this.state.shouldCondense ? "timeline-node condensed" : "timeline-node";
                            if (this.state.shouldFilter) {
                                if (!this.props.condensedIndexes.find((val) => val === i)) className += " hidden";
                            }
                            return <div className={className} ref={this.nodeRefs[i]} key={i}>
                                <div className={i % 2 == 1 ? "excerpt short" : "excerpt"}>{item.excerpt}</div>
                                <div className={i % 2 == 1 ? "line short" : "line"}></div>
                                <div className="middle-node"></div>
                                <div className="chapters">{item.chapters}</div>
                                <div className="name">{item.chapterName}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Timeline;