import React from "react";
import MapItem from "./MapItem";

const gridsEqual = (grid1, grid2) => {
    if (grid1.length !== grid2.length) return false;
        
    for (let i = 0; i < grid1.length; i++) {
        if (grid1[i].length !== grid2[i].length) return false;            
        for (let j = 0; j < grid1[i].length; j++) {
            if (grid1[i][j].type !== grid2[i][j].type || grid1[i][j].colorIndex !== grid2[i][j].colorIndex) return false;
        }
    }
    return true;
}

class GameMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMap: [],
            shouldUpdate: true
        }
    }

    shouldComponentUpdate(newProps) {
        return !gridsEqual(newProps.gameMap, this.state.gameMap);
    }

    static getDerivedStateFromProps(newProps, oldState) {
        let isEqual = gridsEqual(oldState.gameMap, newProps.gameMap)
        
        if (!isEqual) {
            return {
                gameMap: newProps.gameMap.map(row => row.map(item => item)),
                shouldUpdate: true
            }
        }
        return {
            shouldUpdate: false
        };
    }

    render() {
        return <div className="map-maker-grid">
            {
                this.props.gameMap.map((items, i) => {
                    return <div className="grid-row" key={i}>
                        {
                            items.map((item, j) => 
                                <MapItem 
                                    key={j} 
                                    coordinate={{x: j, y: 27-i}}
                                    itemType={item.type}
                                    colorIndex={item.colorIndex}
                                    playerIndex={item.playerIndex}
                                    onClick={this.mapItemClick.bind(this)}
                                    onMouseOver={this.mapItemHover.bind(this)}
                                />
                            )
                        }
                    </div>
                })
            }
        </div>
    }

    mapItemClick(coordinate) {
        this.props.mapItemClick && this.props.mapItemClick(coordinate);
    }
    mapItemHover(coordinate) {
        this.props.mapItemHover && this.props.mapItemHover(coordinate);
    }
}

export default GameMap;