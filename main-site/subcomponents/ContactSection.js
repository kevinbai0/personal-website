import React from "react";
import Link from "next/link";


class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            subject: "",
            message: ""
        }
    }
    render = () =>
        <div className="contact-section">
            <img className="background-img" src="/static/main-site/assets/giant3.png"/>
            <div className="underlined-title">
                <div className="title">Get in touch</div>
                <div className="underlined width-20"></div>
            </div>
            <form className="contact-form" onSubmit={this.onFormSubmit}>
                <label className="email" >Email</label>
                <input type="text" name="email" className="input-field email" value={this.state.email} onChange={this.onValueChange} placeholder="Email"/>
                <label className="name">Name</label>
                <input type="text" name="name" className="input-field name" value={this.state.name} onChange={this.onValueChange} placeholder="Name"/>
                <label className="subject">Subject</label>
                <input type="text" name="subject" className="input-field subject" value={this.state.subject} onChange={this.onValueChange} placeholder="Subject"/>
                <label className="message">Message</label>
                <textarea name="message" className="input-field message" data-gramm_editor="false" value={this.state.message} onChange={this.onValueChange} placeholder="Message"></textarea>
                <input type="submit" value="Submit" className="submit-btn"/>
            </form>
            <div className="my-location">Located in<br/>Thunder Bay, Ontario</div>
            <footer className="contact-footer">
                <div className="page-links-container">
                    {
                        this.props.navBarItems.map((item) => {
                            return <div><Link href={item.link}><a>{item.name}</a></Link></div>
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
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
}

export default ContactSection;