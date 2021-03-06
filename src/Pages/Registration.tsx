import React, { useMemo, useState } from 'react'
import AddressInfo from '../components/AddressInfo';
import PaymentInfo from '../components/PaymentInfo';
import PersonalInfo from '../components/PersonalInfo';
import SuccessInfo from '../components/SuccessInfo';
import "../styles/registration.scss"
import useForm from '../hooks/useForm';
import * as api from "../services/api";



export default function Registration() {
  const [page, setPage] = useState(0);
  const [formTitle, setFormTitle] = useState(["Personal Information", "Address ", "Payment ", "Finished"])
  const { form } = useForm();
  const [formData, setFormData] = useState({ ...form });
  const [successData, setSuccessData] = useState<any>();

  useMemo(() => {
    const savedPage = JSON.parse(localStorage.getItem('page-number')!);
    const persistedPaymentData = JSON.parse(localStorage.getItem('payment-data-id')!);

    if (savedPage !== null) {
      setPage(savedPage)
    }
    if(persistedPaymentData){
      setSuccessData(persistedPaymentData)
    }

  }, [])

  interface Target {
    name: string;
    value: string;
  }
  function handleChange({ name, value }: Target) {
    setFormData({ ...formData, [name]: value });
  }

  async function navigateForward() {
    setPage(page + 1);
    localStorage.setItem("page-number", JSON.stringify(page + 1));

    if (page === 2) {
      try {
        const response = await api.savePaymentData({
          customerId: 1,
          iban: formData.iban,
          owner: formData.accountOwner
        }
        )
        setSuccessData(response.paymentDataId);
        api.register({ ...formData, paymentDataId: response.paymentDataId });
      } catch (error) {
        console.log(error);
      }

    } else {
      localStorage.setItem("registration", JSON.stringify(formData));

    }
  }

  return (
    <div className="containter">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "25%" : page == 1 ? "50%" : page == 2 ? "75%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">{formTitle[page]}</div>
        <div className="body">
          <PersonalInfo display={page === 0 ? "flex" : "none"}
            handleChange={handleChange}
            formData={formData}
            page={page}
            navigateForward={navigateForward}
            setPage={setPage}


          />
          <AddressInfo display={page === 1 ? "flex" : "none"}
            handleChange={handleChange}
            formData={formData}
            page={page}
            navigateForward={navigateForward}
            setPage={setPage}
          />
          <PaymentInfo display={page === 2 ? "flex" : "none"}
            handleChange={handleChange}
            formData={formData}
            page={page}
            navigateForward={navigateForward}
            setPage={setPage}

          />
          <SuccessInfo successData={successData}
            display={page === 3 ? "flex" : "none"}
          />
        </div>

      </div>
    </div>
  )
}
