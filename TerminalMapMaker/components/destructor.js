import React from "react";

const Destructor = ({className, fillColor}) => 
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 50 50" className={className ? "destructor " + className : "destructor "}>
        <style jsx>{`
            .st0{fill:${fillColor ? fillColor : "#FF22A1"};}
        `}</style>
        <g id="firewall3">
            <g>
                <g>
                    <path className="st0" d="M25,34.1L25,34.1c-2.5,0-4.8-1-6.5-2.7c-1.7-1.7-2.6-4-2.6-6.5c0-5,4.1-9,9.1-9c5.1,0,9.1,4.1,9.1,9.1
                        C34.1,30.1,30.1,34.1,25,34.1z M25,18.8v0.2c-3.3,0-6,2.7-6,6c0,1.6,0.6,3.1,1.8,4.3c1.1,1.1,2.7,1.8,4.3,1.8c3.4-0.1,6-2.8,6-6
                        c0-3.3-2.7-6.1-6.1-6.1L25,18.8C25,18.8,25,18.8,25,18.8z"/>
                </g>
                <g>
                    <path className="st0" d="M24.9,49.7l-0.2,0c-6.6-0.1-12.7-2.7-17.4-7.4c-4.6-4.7-7.2-11-7.1-17.6C0.4,11.3,11.5,0.3,25.1,0.3h0.2
                        C38.9,0.4,49.8,11.5,49.7,25C49.6,38.9,38.7,49.7,24.9,49.7z M24.9,1.7v0.5C12.4,2.2,2.2,12.4,2.2,25c0,6.1,2.4,11.8,6.7,16.1
                        c4.3,4.3,10,6.7,16.1,6.7l0.5,0c12.3-0.2,22.3-10.4,22.3-22.7C47.8,12.5,37.6,2.2,25,2.2L24.9,1.7C24.9,1.7,24.9,1.7,24.9,1.7z"
                        />
                </g>
            </g>
        </g>
        <g id="firewall2"></g>
        <g id="firewall1"></g>
        <g id="info1"></g>
        <g id="info2"></g>
        <g id="info3"></g>
    </svg>


export default Destructor;