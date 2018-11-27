import React from "react";
import "./durationSelectorStyle.css";
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class DurationSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 15,
            duration: 15
        }
    }
    render() {
        return <div className="duration-selector">
            <div className="duration-title">
                Frames Per <br/> Second
            </div>
            <Slider 
                min={1} 
                max={30} 
                value={this.state.value} 
                defaultValue={this.state.value} 
                onChange={(e) => this.changeValue(e)}
            />
            <div className="duration-input">{this.state.duration + " fps"}</div>
        </div>
    }

    changeValue(e) {
        this.props.durationSetter(1000 / e);
        this.setState({
            value: e,
            duration: e
        })
    }
    changeValueInput(e) {
        let value = e.target.value;
    }
}

export default DurationSelector;