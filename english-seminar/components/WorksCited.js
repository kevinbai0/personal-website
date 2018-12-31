import React from "react";
import seminarStyle from "../style";

const WorksCited = ({navigationBar}) => 
    <div className="works-cited-page">
        {navigationBar}
        {seminarStyle}
        <div className="title">Works Cited</div>
        <div className="cite-container">
            <div className="citation">
                Shakespeare, William. <span className="it">King Lear</span>, Edited by Eric A. McCann, Canadian School Book Exchange, 1996.
            </div>
            <div className="citation">Sophocles. <span className="it">The Complete Plays of Sophocles</span>, “Oedipus the King,” Edited and with an Introduction by Moses Hadas, 3rd ed.,  Bantam Dell, 2006, pp. 79-120.
</div>
        </div>
    </div>

export default WorksCited;