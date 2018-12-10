import React from "react";
import ItemType from "../helpers/ItemType";
import Destructor from "./destructor";
import Filter from "./filter";
import Encryptor from "./encryptor";
import {groupColors} from "../helpers/groupColors";

class MapItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {itemType, colorIndex} = this.props;
        let component = <div className={"rendered " + itemType}></div>

        if (itemType === ItemType.FILTER) component = <Filter className="rendered" fillColor={groupColors[colorIndex ? colorIndex : 0]}/>
        else if (itemType === ItemType.ENCRYPTOR) component = <Encryptor className="rendered" fillColor={groupColors[colorIndex ? colorIndex : 0]} />
        else if (itemType === ItemType.DESTRUCTOR) component = <Destructor className="rendered" fillColor={groupColors[colorIndex ? colorIndex : 0]}/>
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