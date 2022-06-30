import React, { useState } from 'react'
import AddressInfo from '../Components/AddressInfo';
import PaymentInfo from '../Components/PaymentInfo';
import PersonalInfo from '../Components/PersonalInfo';
import SuccessInfo from '../Components/SuccessInfo';
import "../styles/registration.scss"

export default function Registration() {
  const [page, setPage] = useState(0);
  const [formTitle, setFormTitle] = useState(["Personal Information", "Address ", "Payment ", "Finished"])

  function PageView() {
    switch (page) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <AddressInfo />;
      case 2:
        return <PaymentInfo />
      default: return <SuccessInfo />
    }
  }
  return (
    <div className="containter">
      <div className="form-container">
        <div className="header">{formTitle[page]}</div>
        <div className="body">
          <PageView />
        </div>
        {page !== 3 &&
          <div className="footer">
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
            <button onClick={() => setPage(page + 1)}>{page === 2 ? "Submit" : "Next"}</button>
          </div>
        }
      </div>
    </div>
  )
}
