import React, {Component} from "react";
import NotificationModal from "./NotificationModal";

class EmailComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
		}
	}
	render() {
		return <div className="enter-email-view">
			<input type="text" id="emailInput"className="email-input" placeholder="Email" onChange={this.handleEmailInput}/>
			<div className="send-button" onClick={(e) => this.sendEmail()}>
				Send
			</div>
		</div>
	}

	handleEmailInput = (e) => {
		this.setState({
			email: e.target.value
		});
	}

	sendEmail = () => {		
		if (this.isEmail(this.state.email)) {
			this.props.toggleModal(<NotificationModal modalState={"loading"}>Loading...</NotificationModal>);
			fetch("/api/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify({
					email: this.state.email
				})
			}).then((res) => res.json()).then((json) => {
				this.props.toggleModal(<NotificationModal modalState={"success"}>Thanks we'll be in touch shortly!</NotificationModal>, () => {
					setTimeout(() => {
						this.props.toggleModal(<NotificationModal modalState={"hidden"}/>);
						this.setState({
							email: ""
						})
						document.getElementById("emailInput").value = "";
					}, 2000);
				})
			});
		}
		else {
			this.props.toggleModal(<NotificationModal modalState={"error"}>Not a valid email</NotificationModal>, () => {
				setTimeout(() => {
					this.props.toggleModal(<NotificationModal modalState={"hidden"} />);
				}, 2000);
			})
		}
	}

	isEmail(str) {
		let atIndex = -1;
		let dotIndex = -1;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === "@") {
				if (dotIndex != -1) return false;
				atIndex = i;
			}
			if (str[i] === "." && atIndex != -1 && dotIndex == -1) {
				dotIndex = i;
			}
			if (str[i] === " ") {
				return false;
			}
		}

		if (atIndex != -1 && dotIndex != -1 && dotIndex > atIndex && dotIndex < str.length - 1 && dotIndex - 1 > atIndex) {
			return true;
		}
		return false;
	}
	
}

export default EmailComponent;