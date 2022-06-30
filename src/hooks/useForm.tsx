import React from 'react';
import { useContext } from 'react';
import FormContext from '../contexts/formcontext';

export default function useForm() {
    return useContext(FormContext);
}
