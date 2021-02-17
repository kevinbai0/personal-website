import React from "react";
import Slide from "../Slide";
import anime from "animejs";
import Router from "next/router";
import { prefix } from "../../config";

class SubprongPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRemove: false,
            shouldPreTransition: props.transition
        }
        this.titleRef = React.createRef();
        this.subprongRef = React.createRef();
        this.textRef = React.createRef();
        this.quoteSymbolRef = React.createRef();
        this.authorRef = React.createRef();
        this.headerRef = React.createRef();
        this.quoteOfSlideRef = React.createRef();
    }
    componentDidMount() {
        let symbols = []
        if (this.quoteSymbolRef.current) symbols.push(this.quoteSymbolRef.current);
        if (this.authorRef.current) symbols.push(this.authorRef.current);
        
        anime({
            targets: this.textRef.current,
            opacity: [0,1],
            duration: 1000,
            delay: 500,
            translateX: ["-50%", "-50%"],
            easing: "easeInOutSine"
        })
        anime({
            targets: symbols,
            opacity: [0,1],
            duration: 1000,
            delay: 500,
            easing: "easeInOutSine"
        })
        setTimeout(() => {
            if (this.state.shouldPreTransition) {
                this.setState({
                    shouldPreTransition: false
                })
            }
        }, 500);
    }
    componentDidUpdate() {
        if (this.state.shouldRemove) {
            let symbols = []
            if (this.quoteSymbolRef.current) symbols.push(this.quoteSymbolRef.current);
            if (this.authorRef.current) symbols.push(this.authorRef.current);
            if (this.quoteOfSlideRef.current && this.props.lastSubprong) symbols.push(this.quoteOfSlideRef.current);
            let timeline = anime.timeline()
            timeline.add({
                targets: symbols,
                opacity: [1,0],
                duration: 500,
                easing: "easeInOutSine"
            }).add({
                targets: !this.props.lastSubprong ? this.textRef.current : [
                    this.textRef.current, this.titleRef.current, this.subprongRef.current, this.headerRef.current
                ],
                opacity: [1,0],
                duration: 500,
                offset: 0,
                easing: "easeInOutSine",
            })
            timeline.finished.then(() => {
                if (this.props.nextRoute) {
                    Router.push(prefix + this.props.nextRoute);
                }
            });
        }
    }
    render() {
        let {title, subprong, quote, theme} = this.props;
        let preTransition = this.state.shouldPreTransition;
        return <Slide className="subprong-page" backgroundColor={preTransition ? "#AE5BF5" : theme === "dark" ? "#333333" : "#AE5BF5"} onClick={() => this.clickHandler()}>
            <header ref={this.headerRef}>Archetype of the Villain <br/><span className="light">in</span> <span className={preTransition ? "black" : theme === "dark" ? "purple" : "black"}>{theme === "dark" ? "A Fine Balance" : "The Kite Runner"}</span></header>
            {
                quote && <div className="quote-symbol" className={preTransition ? "quote-symbol black" : theme === "dark" ? "quote-symbol purple" : "quote-symbol black"} ref={this.quoteSymbolRef}>“</div>
            }
            <div className="title" ref={this.titleRef}>{title}</div>
            <div className={preTransition ? "subprong black" : theme === "dark" ? "subprong purple" : "subprong black"} ref={this.subprongRef}>{subprong}</div>
            {
                !quote ? <div className="subprong-support" ref={this.textRef}>{this.props.children}</div> : <div className="quote-support" ref={this.textRef}>{this.props.children}</div>
            }
            {
                quote && <div className="quote-author" ref={this.authorRef}>{this.props.author}</div>
            }
            {
                this.props.quoteOfTheSlide && <div className="quote-of-slide" style={{
                    color: "white",
                    position: "absolute",
                    bottom: "2%",
                    textAlign: "center",
                    width: "100%"
                }} ref={this.quoteOfSlideRef}>{this.props.quoteOfTheSlide}</div>
            }
        </Slide>
    }

    clickHandler() {
        if (!this.state.shouldRemove) {
            this.setState({
                shouldRemove: true
            })
        }
        
    }
}

export default SubprongPage;