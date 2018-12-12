import React from "react";
import ItemType from "../helpers/ItemType";
import Destructor from "./destructor";
import Filter from "./filter";
import Encryptor from "./encryptor";
import {groupColors} from "../helpers/groupColors";

class MapItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemType: "",
            colorIndex: -1
        }
    }
    shouldComponentUpdate(newProps) {
        return newProps.itemType !== this.state.itemType || newProps.colorIndex !== this.state.colorIndex;
    }
    static getDerivedStateFromProps(newProps, oldState) {
        if (newProps.itemType !== oldState.itemType || newProps.colorIndex !== oldState.colorIndex) {
            return {
                itemType: newProps.itemType,
                colorIndex: newProps.colorIndex
            }
        }
        return null;
    }
    render() {
        let {itemType, colorIndex, playerIndex} = this.props;
        let defaultClass = "rendered ";
        if (playerIndex === 1) {
            defaultClass = "rendered enemy ";
        }
        let component = <div className={defaultClass + itemType}></div>

        if (itemType === ItemType.FILTER) component = <Filter className={defaultClass} fillColor={groupColors[colorIndex ? colorIndex : 0]}/>
        else if (itemType === ItemType.ENCRYPTOR) component = <Encryptor className={defaultClass} fillColor={groupColors[colorIndex ? colorIndex : 0]} />
        else if (itemType === ItemType.DESTRUCTOR) component = <Destructor className={defaultClass} fillColor={groupColors[colorIndex ? colorIndex : 0]}/>
        
        return <div className="grid-item" onMouseOver={() => this.handleHover()} onClick={() => this.handleClick()}>
            {component}
        </div>
    }

    handleHover() {
        this.props.onMouseOver && this.props.onMouseOver(this.props.coordinate);
    }
    handleClick() {
        this.props.onClick && this.props.onClick(this.props.coordinate);
    }
}

export default MapItem;