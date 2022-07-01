import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import "../styles/common.scss"
import { validateNextStep } from './utils/valitadeNextStep';


export default function PersonalInfo({ handleChange, formData: personalData, display, page, navigateForward, setPage }: any) {
  const [phoneLabel, setPhoneLabel] = useState<string>("");
   function isDisabled() {
        return validateNextStep(personalData, ["firstName", "lastName", "phone"]);
    }
  return (
    <div className={`personal-info component ${display}`}  >

      <TextField
        sx={{ marginBottom: "9px" }}
        fullWidth id="outlined-basic"
        label="Firstname"
        variant="outlined"
        type="text"
        value={personalData.firstName}
        name="firstName"
        required
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
        required
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

      <div className="footer">
        <button disabled={true} onClick={() => setPage(page - 1)}>Prev</button>
        <button 
        type="submit" 
        disabled={isDisabled()}
        style={{cursor:`${isDisabled()?'not-allowed':'pointer'}`}}
        onClick={() => navigateForward()}>Next</button>
      </div>

    </div>
  )
}
