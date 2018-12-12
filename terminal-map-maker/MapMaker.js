import React from "react";
import Filter from "./components/filter";
import Destructor from "./components/destructor";
import Encryptor from "./components/encryptor";
import mapMakerStyle from "./stylesheets/mapMakerStyle";
import GameMap from "./components/GameMap";
import ItemType from "./helpers/ItemType";
import mapItemStyle from "./stylesheets/mapItemStyle";
import GroupItem from "./components/GroupItem";
import {groupColors, colorNames} from "./helpers/groupColors";
import CustomHead from "./components/CustomHead";
import PointsModal from "./components/PointsModal";

class MapMaker extends React.Component {
    // initializes an empty representation of the map
    getInitGameMap() {
        let gameMap = [];
        for (let i = 0; i < 28; i++) {
            gameMap.push([]);
            for (let j = 0; j < 28; j++) {
                let x = j;
                let y = 27 - i;
                if (x < 14 && y < 14 && -x + 13 > y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0, playerIndex: 0});
                else if (x < 14 && y > 13 && x + 14 < y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0, playerIndex: 1});
                else if (x > 13 && y < 14 && x - 14 > y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0, playerIndex: 0});
                else if (x > 13 && y > 13 && -x + 41 < y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0, playerIndex: 1});
                else if (y > 13) gameMap[i].push({ type: ItemType.VALID, colorIndex: 0, playerIndex: 1});
                else gameMap[i].push({ type: ItemType.VALID, colorIndex: 0, playerIndex: 0});
            }
        }
        /* 
        gameMap is a 2-d array with each item containing an object: {
            type: ItemType // defines if a destructor, encryptor etc. is placed down.
            colorIndex: Number (integer) // it's index defines the group that it is in.
        }
        */
        return gameMap;
    }
    constructor(props) {
        super(props);
        this.state = {
            gameMap: this.getInitGameMap(),
            currentHoveredCoordinate: undefined,
            firewallType: ItemType.FILTER,
            groups: ["#FF22A1"],
            selectedGroupIndex: 0,
            showModal: false,
            coordinateStrings: {
                myPointsStrings: [],
                enemyPointsStrings: []
            }
        }
    }
    render() {
        let firewallItemClass = "firewall-item";
        let firewallItemSelected = "firewall-item firewall-item-selected";
        let groupColor = groupColors[this.state.selectedGroupIndex]; // defines what colour to render each new object
        return (
            <div className="map-maker-container">
                <CustomHead />
                {
                    // modal for showing the user's points
                    this.state.showModal && <PointsModal 
                        coordinateStrings={this.state.coordinateStrings} 
                        hideModal={() => this.setState({showModal: false})}
                    />
                }
                { /* Game Map */ }
                <GameMap gameMap={this.state.gameMap} mapItemClick={this.mapItemClick} mapItemHover={this.mapItemHover}/>
                
                { /* Options panel */}
                <div className="map-maker-options-container">
                    <div className="container-title">Options</div>
                    { /* Firewalls container to choose which type of firewall to place on map */ }
                    <div className="firewall-title">Choose Placement Marker</div>
                    <div className="firewalls-container options-container">
                        <div 
                            className={this.state.firewallType === ItemType.FILTER ? firewallItemSelected : firewallItemClass}
                            onClick={() => this.setFirewallItem(ItemType.FILTER)}
                        >
                            <Filter fillColor={groupColor}/>
                        </div>
                        <div
                            className={this.state.firewallType === ItemType.ENCRYPTOR ? firewallItemSelected : firewallItemClass}
                            onClick={() => this.setFirewallItem(ItemType.ENCRYPTOR)}
                        >
                            <Encryptor fillColor={groupColor}/>
                        </div>
                        <div 
                            className={this.state.firewallType === ItemType.DESTRUCTOR ? firewallItemSelected : firewallItemClass}
                            onClick={() => this.setFirewallItem(ItemType.DESTRUCTOR)}
                        >
                            <Destructor fillColor={groupColor}/>
                        </div>
                        <div 
                            className={this.state.firewallType === ItemType.VALID ? firewallItemSelected : firewallItemClass}
                            onClick={() => this.setFirewallItem(ItemType.VALID)}
                        >
                            <div className="x" style={{color: groupColor}}>X</div>
                        </div>
                    </div>
                    { /* Each of the colors group - lets user pick which color to use */ }
                    <div className="groups-container options-container">
                        {
                            this.state.groups.map((group, i) => <GroupItem 
                                key={i} 
                                color={groupColors[i]} 
                                selected={this.state.selectedGroupIndex === i}
                                onClick={() => this.setSelectedGroup(i)}
                            />)
                        }
                        <div className="group-item add-group-item" onClick={() => this.addGroup()}><div>+</div></div>
                    </div>
                    { /* Utility buttons (get all points and remove all points) */ }
                    <div className="export-points-container options-container">
                        <div className="utility-button" onClick={() => this.getPointsAsCode()}>Get Points</div>
                        <div className="utility-button" onClick={() => this.resetMap()}>Remove All Points</div>
                    </div>
                    { /* Displays the current coordinate the user is hovering on */ }
                    <div className="current-coordinate-container options-container">
                        <div className="current-coordinate-title">Current Coordinate</div>
                        <div className="current-coordinate-value">{this.state.currentHoveredCoordinate && this.state.currentHoveredCoordinate.x + ", " + this.state.currentHoveredCoordinate.y}</div>
                    </div>
                </div>

                {/* Styles imported from stylesheets */}
                {mapMakerStyle}
                {mapItemStyle}
            </div>
        )
    }
    
    mapItemClick = (coordinate) => {
        // convert the x,y coordinates to i,j for indexing the array
        let i = 27 - coordinate.y;
        let j = coordinate.x;
        
        // only execute if the selected coordinate is a valid coordinate or represents a change
        if (this.state.firewallType === undefined) return;
        if (this.state.gameMap[i][j].type === ItemType.NON_EXISTENT) return;
        if (this.state.gameMap[i][j].type === this.state.firewallType && this.state.gameMap[i][j].colorIndex === this.state.selectedGroupIndex) return;
        
        // create copy of the map
        let mapCopy = this.state.gameMap;
        // change the coordinate selected to current selected options
        mapCopy[i][j] = {
            type: this.state.firewallType,
            colorIndex: this.state.selectedGroupIndex,
            playerIndex: mapCopy[i][j].playerIndex
        }
        // update state (which updates the map)
        this.setState({
            gameMap: mapCopy
        })
    }
    mapItemHover = (coordinate) => {
        // updates the current hovered coordinate so the user knows which coordinate is hovered over
        if (this.state.currentHoveredCoordinate && coordinate.x === this.state.currentHoveredCoordinate.x && coordinate.y === this.state.currentHoveredCoordinate.y) return;
        this.setState({
            currentHoveredCoordinate: coordinate
        })
    }

    setFirewallItem(itemType) {
        // when the user selects a specific item in the firewall options panel, update the state
        if (this.state.firewallType === itemType) return;
        this.setState({
            firewallType: itemType
        })
    }

    setSelectedGroup(index) {
        // when the user selects a specific item in the groups options panel, update the state
        if (index === this.state.selectedGroupIndex) return;
        this.setState({
            selectedGroupIndex: index
        })
    }

    addGroup() {
        // add a new group if not all groups are already added
        if (this.state.groups.length < groupColors.length) {
            let groups = this.state.groups;
            groups.push(groupColors[this.state.groups.length]);
            this.setState({
                groups: groups,
                selectedGroupIndex: groups.length - 1
            })
        }
    }

    // reset the map to start fresh and new mapping
    resetMap() {
        this.setState({
            gameMap: this.getInitGameMap()
        })
    }

    // get the currently selected points and format into string to be outputted for the user
    getPointsAsCode() {
        let {gameMap} = this.state;

        let filtered = []
        gameMap.forEach((row, i) => row.forEach((item, j) => {
            if (item.type === ItemType.DESTRUCTOR || item.type === ItemType.ENCRYPTOR || item.type === ItemType.FILTER)
                filtered.push({
                    x: j,
                    y: 27 - i,
                    type: item.type,
                    colorIndex: item.colorIndex,
                    playerIndex: item.playerIndex
                });
        }))

        let myCoordinatesAsStrings = groupColors.map(color => ({[ItemType.DESTRUCTOR]: "", [ItemType.ENCRYPTOR]: "", [ItemType.FILTER]: "" }));
        let enemyCoordinatesAsStrings = groupColors.map(color => ({[ItemType.DESTRUCTOR]: "", [ItemType.ENCRYPTOR]: "", [ItemType.FILTER]: "" }));

        filtered.forEach((item) => {
            if (item.playerIndex === 0) {
                myCoordinatesAsStrings[item.colorIndex][item.type] += "[" + item.x + ", " + item.y + "]"
                myCoordinatesAsStrings[item.colorIndex][item.type] += "   "
            }
            else if (item.playerIndex === 1) {
                enemyCoordinatesAsStrings[item.colorIndex][item.type] += "[" + item.x + ", " + item.y + "]"
                enemyCoordinatesAsStrings[item.colorIndex][item.type] += "   "
            }
        })

        // mapped function
        const mappedToStringArray = (obj, colorIndex) => {
            let masterString = "";
            for (let item in obj) {
                let val = obj[item]
                                .trim()
                                .split("   ")
                                .reduce((prevStr, currentStr) => prevStr === "[" ? prevStr + currentStr : prevStr + ", " + currentStr, "[") + "]";
                if (val.length > 2) {
                    // filters if a string is simply: []
                    let typeString = "filters";
                    if (item === ItemType.DESTRUCTOR) typeString = "destructors"
                    else if (item === ItemType.ENCRYPTOR) typeString = "encryptors";
                    if (masterString) masterString += "\n";
                    masterString += colorNames[colorIndex] + "_" + typeString + "_points = " + val;
                }
            }
            return masterString;
        }

        // converting coordinates to string
        myCoordinatesAsStrings = myCoordinatesAsStrings.map(mappedToStringArray);
        enemyCoordinatesAsStrings = enemyCoordinatesAsStrings.map(mappedToStringArray);

        

        this.setState({
            showModal: true,
            coordinateStrings: {
                myPointsStrings: myCoordinatesAsStrings,
                enemyPointsStrings: enemyCoordinatesAsStrings 
            }
        })
    }
}

export default MapMaker;