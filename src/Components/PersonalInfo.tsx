import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function PersonalInfo() {
  const [value, setValue] = useState()
  return (
    <div className='personal-info'>
      <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Firstname" variant="outlined" type="text" />
      <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Lastname" variant="outlined" type="text" />
      <TextField sx={{ marginBottom: "9px" }} fullWidth id="outlined-basic" label="Telephone Number" variant="outlined" type="text" />
      <PhoneInput
        international
        defaultCountry="DE"
        value={value}
        onChange={() => setValue} />
    </div>
  )
}
