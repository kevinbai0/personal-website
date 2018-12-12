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

class MapMaker extends React.Component {
    getInitGameMap() {
        let gameMap = [];
        for (let i = 0; i < 28; i++) {
            gameMap.push([]);
            for (let j = 0; j < 28; j++) {
                let x = j;
                let y = 27 - i;
                if (x < 14 && y < 14 && -x + 13 > y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0});
                else if (x < 14 && y > 13 && x + 14 < y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0});
                else if (x > 13 && y < 14 && x - 14 > y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0});
                else if (x > 13 && y > 13 && -x + 41 < y) gameMap[i].push({ type: ItemType.NON_EXISTENT, colorIndex: 0});
                else if (y > 13) gameMap[i].push({ type: ItemType.ENEMY, colorIndex: 0});
                else gameMap[i].push({ type: ItemType.ME, colorIndex: 0});
            }
        }
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
            coordinateStrings: []
        }
    }
    render() {
        let firewallItemClass = "firewall-item";
        let firewallItemSelected = "firewall-item firewall-item-selected";
        let groupColor = groupColors[this.state.selectedGroupIndex];
        return (
            <div className="map-maker-container">
                <CustomHead />
                {
                    this.state.showModal && <div className="modal">
                        <section className="modal-content">
                            <div className="title">My points</div>
                            <div className="results-field">{
                                this.state.coordinateStrings
                                    .map((string, i) => {

                                        return <div key={i} className="points-group">{string.split("\n").map(str => <div>{str}</div>)}</div>
                                    })   
                            }</div>
                            <div className="utility-button" onClick={() => this.setState({showModal: false})}>Done</div>
                        </section>
                    </div>
                }
                <GameMap gameMap={this.state.gameMap} mapItemClick={this.mapItemClick} mapItemHover={this.mapItemHover}/>
                <div className="map-maker-options-container">
                    <div className="container-title">Options</div>
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
                            className={this.state.firewallType === ItemType.ME ? firewallItemSelected : firewallItemClass}
                            onClick={() => this.setFirewallItem(ItemType.ME)}
                        >
                            <div className="x" style={{color: groupColor}}>X</div>
                        </div>
                    </div>
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
                    <div className="export-points-container options-container">
                        <div className="utility-button" onClick={() => this.getPointsAsCode()}>Get Points</div>
                        <div className="utility-button" onClick={() => this.resetMap()}>Remove All Points</div>
                    </div>
                    <div className="current-coordinate-container options-container">
                        <div className="current-coordinate-title">Current Coordinate</div>
                        <div className="current-coordinate-value">{this.state.currentHoveredCoordinate && this.state.currentHoveredCoordinate.x + ", " + this.state.currentHoveredCoordinate.y}</div>
                    </div>
                </div>
                {mapMakerStyle}
                {mapItemStyle}
            </div>
        )
    }
    
    mapItemClick = (coordinate) => {
        let i = 27 - coordinate.y;
        let j = coordinate.x;
        if (this.state.firewallType === undefined) return;
        if (this.state.gameMap[i][j].type === ItemType.NON_EXISTENT || this.state.gameMap[i][j].type === ItemType.ENEMY) return;

        if (this.state.gameMap[i][j].type === this.state.firewallType && this.state.gameMap[i][j].colorIndex === this.state.selectedGroupIndex) {
            return;
        }
        let mapCopy = this.state.gameMap;
        mapCopy[i][j] = {
            type: this.state.firewallType,
            colorIndex: this.state.selectedGroupIndex
        }
        this.setState({
            gameMap: mapCopy
        })
    }
    mapItemHover = (coordinate) => {
        if (this.state.currentHoveredCoordinate && coordinate.x === this.state.currentHoveredCoordinate.x && coordinate.y === this.state.currentHoveredCoordinate.y) return;
        this.setState({
            currentHoveredCoordinate: coordinate
        })
    }

    setFirewallItem(itemType) {
        if (this.state.firewallType === itemType) return;
        this.setState({
            firewallType: itemType
        })
    }

    setSelectedGroup(index) {
        if (index === this.state.selectedGroupIndex) return;
        this.setState({
            selectedGroupIndex: index
        })
    }

    addGroup() {
        if (this.state.groups.length < groupColors.length) {
            let groups = this.state.groups;
            groups.push(groupColors[this.state.groups.length]);
            this.setState({
                groups: groups,
                selectedGroupIndex: groups.length - 1
            })
        }
    }

    resetMap() {
        this.setState({
            gameMap: this.getInitGameMap()
        })
    }

    getPointsAsCode() {
        let {gameMap} = this.state;

        let filtered = [];
        gameMap.forEach((row, i) => row.forEach((item, j) => {
            if (item.type === ItemType.DESTRUCTOR || item.type === ItemType.ENCRYPTOR || item.type === ItemType.FILTER)
                filtered.push({
                    x: j,
                    y: 27 - i,
                    type: item.type,
                    colorIndex: item.colorIndex
                });
        }))

        let coordinatesAsStrings = groupColors.map(color => ({[ItemType.DESTRUCTOR]: "", [ItemType.ENCRYPTOR]: "", [ItemType.FILTER]: "" }));
        filtered.forEach((item) => {
            coordinatesAsStrings[item.colorIndex][item.type] += "[" + item.x + ", " + item.y + "]"
            coordinatesAsStrings[item.colorIndex][item.type] += "   "
        })

        // converting coordinates to string
        coordinatesAsStrings = coordinatesAsStrings.map((obj, colorIndex) => {
            let newObj = {}
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
            console.log(masterString);
            return masterString;
        });

        // next, reduce coordinate strings
        
        this.setState({
            showModal: true,
            coordinateStrings: coordinatesAsStrings
        })
    }
}

export default MapMaker;