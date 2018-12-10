import React from "react";

class GroupItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        }
    }
    render = () => {
        let borderColor = this.props.color;
        if (this.state.hovering) borderColor = "#888888"; 
        if (this.props.selected) borderColor = "#FFFFFF";

        return <div 
            className="group-item"
            style={{
                backgroundColor: this.props.color,
                border: "3px solid " + borderColor
            }}
            onMouseOver={() => this.setHover(true)}
            onMouseOut={() => this.setHover(false)}
            onClick={() => this.handleClick()}
        ></div>
    }

    setHover(isHovering) {
        if (isHovering === this.state.isHovering) return;
        this.setState({
            isHovering: isHovering
        })
    }
    handleClick() {
        this.props.onClick && this.props.onClick();
    }
}

export default GroupItem;