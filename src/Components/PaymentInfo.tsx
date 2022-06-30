import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import useForm from '../hooks/useForm';

export default function Payment({ handleChange, formData: paymentData }: any) {

    return (
        <div className='Payment-info'>
            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="Account owner"
                variant="outlined"
                type="text"
                value={paymentData.accountOwner}
                name="accountOwner"
                onChange={(e) => handleChange(e.target)}
            />

            <TextField
                sx={{ marginBottom: "9px" }}
                fullWidth id="outlined-basic"
                label="iban"
                variant="outlined"
                type="text"
                value={paymentData.iban}
                name="iban"
                onChange={(e) => handleChange(e.target)}

            />
        </div>
    )
}
