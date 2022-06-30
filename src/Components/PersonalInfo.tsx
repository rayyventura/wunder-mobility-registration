import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'


export default function PersonalInfo({ handleChange, formData: personalData }: any) {
  const [phoneLabel, setPhoneLabel] = useState<string>("");
  return (
    <div className='personal-info'>

      <TextField
        sx={{ marginBottom: "9px" }}
        fullWidth id="outlined-basic"
        label="Firstname"
        variant="outlined"
        type="text"
        value={personalData.firstName}
        name="firstName"
        onChange={({ target }) => handleChange(target)}
      />

      <TextField
        sx={{ marginBottom: "9px" }}
        fullWidth id="outlined-basic"
        label="Lastname"
        variant="outlined"
        type="text"
        value={personalData.lastName}
        name="lastName"
        onChange={({ target }) => handleChange(target)}
      />

      <PhoneInput
        country="de"
        value={personalData.phone}
        onChange={(value) => handleChange({ name: 'phone', value: value })}
        inputStyle={{ width: "100%" }}
        specialLabel={phoneLabel}
        onFocus={() => setPhoneLabel("Phone")}
        onBlur={() => setPhoneLabel("")}
      />

    </div>
  )
}
