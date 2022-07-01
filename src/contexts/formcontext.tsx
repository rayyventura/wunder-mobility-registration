import { createContext, useEffect, useMemo, useState } from "react";
import React, { ReactNode } from "react";

interface AuxProps {
  children: ReactNode;
}
interface FormData {
  firstName: string;
  lastName: string;
  phone: string,
  street: string;
  number: string;
  zipCode: string,
  city: string
  accountOwner: string;
  iban: string;
}
export const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  street: '',
  number: '',
  zipCode: '',
  city: '',
  accountOwner: '',
  iban: '',

}
const FormContext = createContext<any>(null);

export function FormProvider({ children }: AuxProps) {
  const persistedRegistration = JSON.parse(localStorage.getItem("registration")!);
  const [form, setForm] = useState(persistedRegistration);

  useMemo(() => {
    if (!persistedRegistration) {
      setForm(initialForm)
    }
  }, [])


  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );

}

export default FormContext;

