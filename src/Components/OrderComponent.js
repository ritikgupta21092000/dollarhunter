import React from "react";
import {TextField} from '@mui/material';

function OrderComponent() {
    return (
        <div className="delivery order">
            <h2>Order Detail</h2>
            <div style={{display: "flex", fontSize: "1.2em"}}>
                <img width="130" height="130" src="./purse.jpg" alt="purse" />
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h5 style={{margin: "10px 0 0 0"}}>ORIGINAL XYZONE BRAND TR1255</h5>
                    <div className="variant">
                        <h5>Variant: RED, 40</h5>            
                    </div>
                    <p><span className="piece">1 PCS (1.100gr) @ </span><span className="price">Rp. 100.00</span></p>
                </div>
            </div>
            <div style={{marginBottom: "20px"}}>
                <TextField id="standard-basic" label="Optional message here" variant="standard" />
            </div>
        </div>
    );
}

export default OrderComponent;