import React from "react";

function DropShipComponent({label}) {
    return(
        <div className="container delivery dropship" style={{height: "80px", marginTop: "10px"}}>
            <h2 style={{float: "left"}}>Dropship</h2>
            <div className="toggle-switch" style={{marginTop: "10px", marginLeft: "150px"}}>
                <input type="checkbox" className="checkbox" 
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                <span className="inner" />
                <span className="switch" />
                </label>
            </div>
         </div>
    )
}

export default DropShipComponent;