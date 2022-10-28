import React from "react";
import "../../index.css";

function TorneioHeader(props) {
    return (
        <div className="divMainFundo">
            <div className="divContentMainFundo">
                <img src={props.logo} className="divTorneioImg"/>
            </div>
        </div>
    )
}

export default TorneioHeader