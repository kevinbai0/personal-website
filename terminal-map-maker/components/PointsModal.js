import React from "react";
import modalStyle from "../stylesheets/modalStyle";

class PointsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabIndex: 0
        }
    }
    render() {
        let {selectedTabIndex} = this.state;
        let myPoints = this.props.coordinateStrings.myPointsStrings.map(str => str.split("\n"))
        let enemyPoints = this.props.coordinateStrings.enemyPointsStrings.map(str => str.split("\n"));
        return (
            <div className="modal">
                <section className="modal-content">
                    <div className="tab-bar">
                        <div 
                            className={selectedTabIndex === 0 ? "tab-bar-item selected" : "tab-bar-item"}
                            onClick={() => this.setState({selectedTabIndex: 0})}
                        >
                            My points
                        </div>
                        <div 
                            className={selectedTabIndex === 1 ? "tab-bar-item selected" : "tab-bar-item"}
                            onClick={() => this.setState({selectedTabIndex: 1})}
                        >
                            Enemy points
                        </div>
                    </div>
                    <div className="results-field">
                        {
                            selectedTabIndex === 0 ?
                                myPoints.map((strings, i) => {
                                    return <div key={i} className="points-group">
                                        {
                                            strings.map(string => <div className="point-group">{string}</div>)
                                        }
                                    </div>
                                })
                                :
                                enemyPoints.map((string, i) => {
                                    return <div key={i} className="points-group">{string}</div>
                                })
                        }
                    </div>
                    <div className="utility-button" onClick={() => this.props.hideModal && this.props.hideModal()}>Done</div>
                </section>
                {modalStyle}
            </div>
        )
    }
}

export default PointsModal;