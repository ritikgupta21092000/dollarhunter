import React from "react";

function PriceComponent() {
    return (
        <div className="delivery items" style={{height: "240px"}}>
            <div className="left-panel">
                <p className="">Total Weight</p>
                <p className="">Total items</p>
                <p className="">Total Order</p>
                <p className="">Voucher</p>
                <p className="">Shipping Cost</p>
                <p className="">Grand Total</p>
            </div>
            <div className="right-panel">
                <p className="">2 Item</p>
                <p className="">2.200 Gram</p>
                <p className="">Rp. 360.00</p>
                <p className="">Rp. 0</p>
                <p className="">Rp. 0</p>
                <p className="total">Rp. 360.00</p>
            </div>
        </div>
    );
}

export default PriceComponent;