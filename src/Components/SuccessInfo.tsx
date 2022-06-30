import React, { useMemo } from 'react'
import SuccesIcon from '../assets/success.png';
import '../styles/success.scss'
export default function SuccessInfo({ successData }: any) {

    return (
        <div className='success'>
            <img src={SuccesIcon} alt="success" />
            <div>
                <p>paymentDataId</p>
            </div>
        </div>
    )
}
