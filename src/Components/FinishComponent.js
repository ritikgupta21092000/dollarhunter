import React from "react";
import {Button} from "@mui/material";

function FinishComponent() {
    return (
        <div className="finish">
            <p>With Payment, I agree with terms &amp; condition</p>
            <Button variant="contained" style={{backgroundColor: "#E70074", width: "430px", marginBottom: "20px"}}>FINISH</Button>
        </div>
    );
}

export default FinishComponent;