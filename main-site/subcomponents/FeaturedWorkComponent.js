
import React, {Component} from "react";

const FeaturedWorkComponent = (props) => {
	return <div id={props.id} className={"featured-work-item"}>
		<div className="featured-image-container" style={props.style}>
			<img className={"featured-image " + props.type} src={props.src}/>
		</div>
		<div className="info">
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
		</div>
	</div>
}

export default FeaturedWorkComponent;