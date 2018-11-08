import React, { Component } from "react";

class SearchEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: ""
        }
    }
    componentDidMount() {
        this.getImage().then((json) => {
            console.log(json.imageURL);
            this.setState({
                imageURL: json.imageURL
            })
        });
    }
    render() {
        return <div className="search-engine">
            {
                <img src={this.state.imageURL} alt={"image"}/>
            }
            <div className="app-content">   
                <div className="welcome-title">Kevin Bai</div>
                <input type="text" className="search-bar" id="mainSearchBar" placeholder="Search" autoFocus/>
            </div>
        </div>
    }
    getImage() {
        return fetch("/api/photoOfTheDay").then((res) => res.json());
    }
}

export default SearchEngine;