import React from 'react'
import TextField from '@mui/material/TextField';

export default function Payment() {
    return (
        <div className='Payment-info'>
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Account owner" variant="outlined" type="text" />
            <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="IBAN" variant="outlined" type="text" />
        </div>
    )
}
