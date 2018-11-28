import React, { Component } from "react";
import search from "../methods/search";
import "../stylesheets/main.css";
import CustomHead from "../subcomponents/CustomHead";

class SearchEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
            currentInput: "",
            autocompleteOptions: [

            ],
            isLink: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <CustomHead />
            {
                <img src={this.state.imageURL} alt={"image"}/>
            }
            <div className="app-content">   
                <div className="welcome-title">Kevin Bai</div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input type="text" className="search-bar" id="mainSearchBar" placeholder="Search" onChange={(e) => this.handleInputChange(e)} autoFocus/>
                    <input type="submit" value="submit" className="hidden"/>
                </form>
                <div className="dropdown-menu">
                    {
                        this.state.autocompleteOptions.map((option, i) => {
                            return <div key={i} className="auto-complete-option">{option.name}</div>
                        })
                    }
                </div>
            </div>
        </div>
    }
    getImage() {
        return fetch("/api/photoOfTheDay").then((res) => res.json());
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.isLink) {
            let hasPrefix = this.state.currentInput.indexOf("http") == 0 
            console.log(this.state.currentInput);
            window.location = hasPrefix ? this.state.currentInput : "http://" + this.state.currentInput;
        }
        else {
            window.location="https://www.google.com/search?source=hp&ei=kMbjW4bEIYnRjwSJtKPIDQ&q=" + this.state.currentInput;
        }
    }
    handleInputChange(e) {
        let results = search.autocompleteSearch(e.target.value.toLowerCase());
        if (results.length == 2 && results[1] == true) {
            this.setState({
                isLink: true,
                currentInput: e.target.value
            })
        }
        else {
            this.setState({
                currentInput: e.target.value,
                autocompleteOptions: results,
                isLink: false
            })
        }
    }
}

export default SearchEngine;