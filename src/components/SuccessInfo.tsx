import SuccesIcon from '../assets/success.png';
import '../styles/success.scss'
import { ThreeDots } from 'react-loader-spinner';


export default function SuccessInfo({ successData, display }: any) {

localStorage.setItem("payment-data-id",JSON.stringify(successData))

    return (
        <div className='success' style={{ display: display }}>
            <img src={SuccesIcon} alt="success" />
            <div className='success-message'>
                <p>Well Done!</p>
                <div className='payment-reference-container'>
                 <p className="payment-reference">Payment reference:</p>
                 {successData?
                 <p>{successData}</p>:
                 <div style={{marginTop:"20px"}}>
                 <ThreeDots color="#000D36" height={13} width={100} />
                 </div>
                    }
                </div>
            </div>
        </div>
    )
}
