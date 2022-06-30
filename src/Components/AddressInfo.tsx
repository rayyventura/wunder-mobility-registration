import React from 'react';
import TextField from '@mui/material/TextField';
import "../styles/address.scss"
import useForm from '../hooks/useForm';

export default function AddressInfo({ handleChange, formData: addressData, display }: any) {

    return (
        <div className={`address-info ${display} `} >

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Zip-code"
                variant="outlined"
                type="text"
                value={addressData.zipCode}
                name="zipCode"
                onChange={(e) => handleChange(e.target)}
            />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Street"
                variant="outlined"
                type="text"
                value={addressData.street}
                name="street"
                onChange={(e) => handleChange(e.target)} />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Number"
                variant="outlined"
                type="text"
                value={addressData.number}
                name="number"
                onChange={(e) => handleChange(e.target)}
            />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="City"
                variant="outlined"
                type="text"
                value={addressData.city}
                name="city"
                onChange={(e) => handleChange(e.target)} />
        </div>
    )
}
