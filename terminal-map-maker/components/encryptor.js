import React from "react";

const Encryptor = ({className, fillColor}) => 
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" 
        viewBox="0 0 50 50"
        className={className ? "encryptor " + className : "encryptor"}>
        <style jsx>{`
            .st0{fill:${fillColor ? fillColor : "#FF22A1"};}
            .st1{opacity:0.33;}
            .st2{clip-path:url(#SVGID_2_);}
        `}</style>
        <g id="firewall3"></g>
        <g id="firewall2">
            <g>
                <g>
                    <path className="st0" d="M25,33.5L25,33.5c-2.3,0-4.5-0.9-6.1-2.5c-1.6-1.6-2.5-3.8-2.4-6c0-4.6,3.9-8.4,8.5-8.4
                        c4.7,0,8.5,3.9,8.5,8.5C33.5,29.8,29.7,33.5,25,33.5z M25,17.9v0.2c-3.8,0-6.9,3.1-6.9,6.9c0,1.8,0.7,3.6,2,4.9
                        c1.3,1.3,3,2,4.9,2c3.9-0.1,6.9-3.2,6.9-6.9c0-3.8-3.1-6.9-6.9-6.9L25,17.9C25,17.9,25,17.9,25,17.9z"/>
                </g>
                <g className="st1">
                    <g>
                        <defs>
                            <rect id="SVGID_1_" x="2.3" y="2.4" width="45.3" height="45.3"/>
                        </defs>
                        <clipPath id="SVGID_2_" dangerouslySetInnerHTML={{__html: '<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></g>'}} >       
                        </clipPath>
                        <g className="st2">
                            <path className="st0" d="M25,47.6h-0.2c-6,0-11.7-2.4-15.9-6.8c-4.3-4.3-6.6-10-6.5-16.1C2.5,12.4,12.6,2.3,25.1,2.3l0.2,0
                                C37.7,2.4,47.7,12.6,47.6,25C47.6,37.7,37.6,47.6,25,47.6z M24.9,11v0.4c-7.5,0-13.6,6.1-13.6,13.6c0,3.6,1.4,7.1,4,9.7
                                c2.6,2.6,6,4,9.6,4l0.3,0c7.3-0.1,13.3-6.2,13.3-13.6c0-7.5-6.1-13.7-13.6-13.7L24.9,11C25,11,25,11,24.9,11z"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
        <g id="firewall1"></g>
        <g id="info1"></g>
        <g id="info2"></g>
        <g id="info3"></g>
    </svg>



export default Encryptor;