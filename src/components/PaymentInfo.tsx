import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { validateNextStep } from './utils/valitadeNextStep';
import "../styles/common.scss"

export default function Payment({ handleChange, formData: paymentData, display, page, navigateForward, setPage }: any) {
function isDisabled() {
        return validateNextStep(paymentData, ["accountOwner", "iban"]);
    }
    return (
        <div className={`Payment-info component ${display}`} >

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Account owner"
                variant="outlined"
                type="text"
                value={paymentData.accountOwner}
                name="accountOwner"
                required
                onChange={(e) => handleChange(e.target)}
            />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="IBAN"
                variant="outlined"
                type="text"
                value={paymentData.iban}
                name="iban"
                required
                onChange={(e) => handleChange(e.target)}

            />

            <div className="footer">
                <button onClick={() => setPage(page - 1)}>Prev</button>
                <button 
                type="submit" 
                disabled={isDisabled()}
                style={{cursor:`${isDisabled()?'not-allowed':'pointer'}`}}
                onClick={() => navigateForward()}>Submit</button>
            </div>
        </div>
    )
}
