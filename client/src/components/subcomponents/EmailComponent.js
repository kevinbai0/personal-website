import React from "react";

const EmailComponent = (props) => {
	return <div className="enter-email-view">
		<input type="text" className="email-input" placeholder="Email"/>
		<div className="send-button">
			Send
		</div>
	</div>
}

export default EmailComponent;