import React, { Component } from "react";

class NotificationModal extends Component {
	render() {
		let animation = "slideInDown";
		if (this.props.modalState === "hidden") {
			animation = "slideOutUp";
		}
		let backgroundColorClass = "";
		if (this.props.modalState == "success") backgroundColorClass = "green";
		if (this.props.modalState == "loading") backgroundColorClass = "yellow";
		else if (this.props.modalState == "error") backgroundColorClass = "red";

		return (
			<div className={"notification-modal animated " + animation + " " + backgroundColorClass}>
				<div className="text-line">{this.props.children}</div>
			</div>
		);
	}
}

export default NotificationModal;