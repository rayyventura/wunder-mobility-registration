import React, { useMemo } from 'react'
import SuccesIcon from '../assets/success.png';
import '../styles/success.scss'

export default function SuccessInfo({ successData, display }: any) {

    return (
        <div className='success' style={{ display: display }}>
            <img src={SuccesIcon} alt="success" />
            <div className='success-message'>
                <p>Well Done!</p>
                <p><span className="payment-reference">Payment reference:</span> {successData}</p>
            </div>
        </div>
    )
}
