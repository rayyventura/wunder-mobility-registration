import React, { useMemo } from 'react'
import SuccesIcon from '../assets/success.png';
import '../styles/success.scss'

export default function SuccessInfo({ successData, display }: any) {

    return (
        <div className='success' style={{ display: display }}>
            <img src={SuccesIcon} alt="success" />
            <div>
                <p>Well Done!</p>
            </div>
        </div>
    )
}
