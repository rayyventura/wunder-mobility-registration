import React from 'react';
import TextField from '@mui/material/TextField';
import "../styles/address.scss"

export default function AddressInfo() {
    return (
        <div className='address-info'>
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Zip-code" variant="outlined" type="text" />
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Street" variant="outlined" type="text" />
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Number" variant="outlined" type="text" />
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="City" variant="outlined" type="text" />
        </div>
    )
}
