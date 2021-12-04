import React from "react";
import {FaGreaterThan} from "react-icons/fa";

function DeliveryComponent(props) {
    return (
    <div className="delivery">
        <h2>{props.title} <span style={{float: "right", paddingRight: "20px", fontSize: "1em", cursor: "pointer", fontWeight: "normal"}}>
            <FaGreaterThan />
        </span></h2>
        <h4>{props.body}</h4>
    </div>
    );
}

export default DeliveryComponent;