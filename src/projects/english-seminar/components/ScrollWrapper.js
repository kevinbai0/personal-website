import React from "react";

class ScrollWrapper extends React.Component {
    componentDidMount = () => window.addEventListener("scroll", this.handleScroll.bind(this));
    componentWillUnmount = () => window.removeEventListener("scroll", this.handleScroll.bind(this));

    handleScroll(scroll) {
        if (this.props.handleScroll) this.props.handleScroll(scroll);
    }

    render = () => this.props.children;
}

export default ScrollWrapper;