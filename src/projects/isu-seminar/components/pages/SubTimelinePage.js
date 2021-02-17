import React from "react";
import Slide from "../Slide";
import Router from "next/router";
import { prefix } from "../../config";

class SubTimelinePage extends React.Component {
    render() {
        return (
            <Slide className="sub-timeline-page" onClick={() => this.handleClick()}>
                <div className="circle">Ishvar<br/>&<br/>Om</div>
                <div className="chapter-title">{this.props.chapters}</div>
                <div className="title">{this.props.title}</div>
                <div className="big-point1">{this.props.point1}</div>
                <div className="sub-point1">{this.props.subpoint1}</div>
                <div className="big-point1">{this.props.point2}</div>
                <div className="sub-point1">{this.props.subpoint2}</div>
            </Slide>
        )
    }
    handleClick() {
        if (this.props.nextRoute) {
            Router.push(prefix + this.props.nextRoute);
        }
    }
}

export default SubTimelinePage;