import React, { Component } from "react";

class SearchEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
            currentInput: ""
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
            {
                <img src={this.state.imageURL} alt={"image"}/>
            }
            <div className="app-content">   
                <div className="welcome-title">Kevin Bai</div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input type="text" className="search-bar" id="mainSearchBar" placeholder="Search" onChange={(e) => this.handleInputChange(e)} autoFocus/>
                    <input type="submit" value="submit" className="hidden"/>
                </form>
                
            </div>
        </div>
    }
    getImage() {
        return fetch("/api/photoOfTheDay").then((res) => res.json());
    }
    handleSubmit(e) {
        console.log("Handle submit");
        e.preventDefault();
        window.location="https://www.google.com/search?source=hp&ei=kMbjW4bEIYnRjwSJtKPIDQ&q=" + this.state.currentInput;
    }
    handleInputChange(e) {
        this.setState({
            currentInput: e.target.value
        })
    }
}

export default SearchEngine;