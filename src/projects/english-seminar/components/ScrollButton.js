import React from "react";
import anime from "animejs";

class ScrollButton extends React.Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.ballRef = React.createRef();
    }
    componentDidMount() {
        anime({
            targets: this.buttonRef.current,
        })
        anime({
            targets: this.ballRef.current,
            translateY: ["-350%", "300%"],
            translateX: ["-50%", "-50%"],
            opacity: [1, 0],
            loop: true,
            duration: 800,
            direction: "alternate",
            easing: "easeInCubic"
        })
    }
    render() {
        let {state, dark} = this.props;
        return (
            <div 
                className={"scroll-button " + state + (dark ? " dark" : "")}
                ref={this.buttonRef}     
                onClick={this.handleClick.bind(this)}            
            >
                <div className="ball" ref={this.ballRef}></div>
            </div>
        )
    }
    handleClick(evt) {
        this.props.onClick && this.props.onClick();
    }
}

export default ScrollButton;