import React from "react";
import CustomHead from "./CustomHead";

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {className, backgroundColor, setFullScreen} = this.props;
        if (backgroundColor) className += " with-shadow";
        if (setFullScreen) className += " full-screen";
        return <div 
            className={className ? "slide " + className : "slide"}
            onClick={() => this.props.onClick && this.props.onClick()}
            style={{
                backgroundColor: backgroundColor ? backgroundColor : "white"
            }}
        >
            <CustomHead />
            {this.props.children}
        </div>
    }
}

export default Slide;