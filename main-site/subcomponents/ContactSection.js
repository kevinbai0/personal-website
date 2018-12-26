import React from "react";
import Link from "next/link";


class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            subject: "",
            message: "",
            emailState: "unsent",
            emailError: "",
            nameError: "",
            subjectError: "",
            messageError: ""
        }
    }
    render = () =>
        <div className="contact-section">
            <img className="background-img" src="/static/main-site/assets/giant4.png"/>
            <div className="underlined-title">
                <div className="title">Get in touch</div>
                <div className="underlined width-20"></div>
            </div>
            <form className="contact-form" onSubmit={this.onFormSubmit}>
                <label className="email">Email <span className="error">{this.state.emailError}</span></label>
                <input type="text" name="email" className="input-field email" value={this.state.email} onChange={this.onValueChange} placeholder="Email"/>
                <label className="name">Name <span className="error">{this.state.nameError}</span></label>
                <input type="text" name="name" className="input-field name" value={this.state.name} onChange={this.onValueChange} placeholder="Name"/>
                <label className="subject">Subject <span className="error">{this.state.subjectError}</span></label>
                <input type="text" name="subject" className="input-field subject" value={this.state.subject} onChange={this.onValueChange} placeholder="Subject"/>
                <label className="message">Message <span className="error">{this.state.messageError}</span></label>
                <textarea name="message" className="input-field message" data-gramm_editor="false" value={this.state.message} onChange={this.onValueChange} placeholder="Message"></textarea>
                {
                    this.state.emailState === "sending" ?
                        <input type="submit" disabled={true} value="Sending..." className="submit-btn submitting"/> :
                        this.state.emailState === "sent" ?
                            <input type="submit" disabled={true} value="Sent" className="submit-btn sent" /> :
                            this.state.emailState === "error" ? 
                                <input type="submit" disabled={true} value="Error" className="submit-btn sent" /> :
                                <input type="submit" value="Submit" className="submit-btn unsent"/>
                }
                
            </form>
            <div className="my-location">Located in<br/>Thunder Bay, Ontario</div>
            <footer className="contact-footer">
                <div className="page-links-container">
                    {
                        this.props.navBarItems.map((item, i) => {
                            return <div key={i}><Link href={item.link}><a>{item.name}</a></Link></div>
                        })
                    }
                </div>
                <div className="contact-info-section">
                    <div className="number">+1 (807) 633-4358</div>
                    <div className="email"><a href="mailto:kevin.c.bai0@gmail.com">kevin.c.bai0@gmail.com</a></div>
                </div>
                <div className="social-media-symbols">
                    <a target="_blank" href="https://instagram.com/kevinbai0"><img src="/static/main-site/assets/igLogo.png" alt="instagram"/></a>
                    <a target="_blank" href="https://linkedin.com/in/kevinbai0"><img src="/static/main-site/assets/linkedLogo.png" alt="linkedin"/></a>
                    <a target="_blank" href="https://github.com/kevinbai0"><img src="/static/main-site/assets/github.png" alt="github"/></a>
                </div>
            </footer>
        </div>

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.emailState === "sending" || !this.checkForm()) return;

        this.setState({
            emailState: "sending"
        })

        fetch("/api/email", {
            method: "POST", 
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res);
            if (res.status == 200) {
                this.setState({
                    emailState: "sent",
                    email: "",
                    message: "",
                    subject: "",
                    name: "",
                    emailError: "",
                    messageError: "",
                    nameError: "",
                    subjectError: ""
                }, () => {
                    setTimeout(() => this.setState({emailState: "unsent"}), 1000);
                })
            }
            else {
                console.log("ERROR");
                this.setState({
                    emailState: "error"
                }, () => {
                    setTimeout(() => this.setState({emailState: "unsent"}), 1000);
                })
            }
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkForm = () => {
        let messageError = this.state.message.length == 0 ? "*Enter a message" : "";
        let nameError = this.state.name.length == 0 ? "*Enter a name" : "";
        let subjectError = this.state.subject.length == 0 ? "*Enter a subject" : "";

        // find email error
        let emailError = "";
        let indexAt = this.state.email.indexOf("@");
        if (this.state.email.length == 0) emailError = "*Enter an email";
        else if (indexAt <= 0 || indexAt == this.state.email.length - 1) emailError = "*Invalid Email";

        this.setState({
            emailError: emailError,
            nameError: nameError,
            subjectError: subjectError,
            messageError: messageError
        })
        return messageError === "" && emailError === "" && nameError === "" && subjectError === ""
    }
}

export default ContactSection;