import React from 'react';
import TextField from '@mui/material/TextField';
import "../styles/common.scss";
import { validateNextStep } from './utils/valitadeNextStep';

export default function AddressInfo({ handleChange, formData: addressData, display, page, navigateForward, setPage }: any) {
    function isDisabled() {
        return validateNextStep(addressData, ["zipCode", "street", "number", "city"]);
    }
    return (
        <div className={`address-info component ${display} `} >

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Zip-code"
                variant="outlined"
                type="text"
                value={addressData.zipCode}
                name="zipCode"
                required
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
                required
                onChange={(e) => handleChange(e.target)} />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Number"
                variant="outlined"
                type="text"
                value={addressData.number}
                name="number"
                required
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
                onChange={(e) => handleChange(e.target)}
                required />

            <div className="footer">
                <button onClick={() => setPage(page - 1)}>Prev</button>
                <button
                    style={{cursor:`${isDisabled()?'not-allowed':'pointer'}`}}
                    type="submit"
                    disabled={isDisabled()}
                    onClick={() => navigateForward()}> Next
                </button>
            </div>
        </div>
    )
}
