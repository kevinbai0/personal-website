import React from "react";

const Filter = ({className, fillColor}) => 
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" 
        className={className ? "filter " + className : "filter"}>
        <g id="firewall3"></g>
        <g id="firewall2"></g>
        <g id="firewall1">
            <g>
                <path className="st0" d="M25,34.1L25,34.1c-2.5,0-4.8-1-6.5-2.7c-1.7-1.7-2.6-4-2.6-6.5c0-5,4.1-9,9.1-9c5.1,0,9.1,4.1,9.1,9.1
                    C34.1,30.1,30.1,34.1,25,34.1z M25,18.8v0.2c-3.3,0-6,2.7-6,6c0,1.6,0.6,3.1,1.8,4.3c1.1,1.1,2.7,1.8,4.3,1.8c3.4-0.1,6-2.8,6-6
                    c0-3.3-2.7-6.1-6.1-6.1L25,18.8C25,18.8,25,18.8,25,18.8z"/>
            </g>
        </g>
        <g id="info1"></g>
        <g id="info2"></g>
        <g id="info3"></g>
        <style jsx>{`
            .st0 {
                fill:${fillColor ? fillColor : "#FF22A1"};
            }
        `}</style>
    </svg>


export default Filter;