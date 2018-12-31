import React from "react";

const CameraShotDiv = ({color, specificRefs}) => 
    <div className="camera-shot-div">
        <div className="top-left" style={{borderColor: color ? color : "white"}} ref={specificRefs && specificRefs.topLeft}></div>
        <div className="top-right" style={{borderColor: color ? color : "white"}} ref={specificRefs && specificRefs.topRight}></div>
        <div className="bottom-left" style={{borderColor: color ? color : "white"}} ref={specificRefs && specificRefs.bottomLeft}></div>
        <div className="bottom-right" style={{borderColor: color ? color : "white"}} ref={specificRefs && specificRefs.bottomRight}></div>
    </div>

export default CameraShotDiv;