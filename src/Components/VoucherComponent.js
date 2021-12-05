import React from "react";
import {TextField, InputAdornment, Box} from "@mui/material";
import {ConfirmationNumberOutlined} from '@mui/icons-material';

function VoucherComponent() {
    return(
        <div className="delivery" style={{height: "90px", paddingTop: "10px"}}>
            <Box sx={{display: "flex", alignItems: "flex-end"}}>
                <ConfirmationNumberOutlined sx={{color: "action.active", mr: 1, my: 0.5}} />
                <TextField style={{width: "350px"}}
                id="standard-basic"
                label="Voucher Code" 
                variant="standard" 
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <p style={{cursor: "pointer"}}>Apply</p>
                        </InputAdornment>
                    )
                }}
                />
                
            </Box>
        </div>
    );
}

export default VoucherComponent;