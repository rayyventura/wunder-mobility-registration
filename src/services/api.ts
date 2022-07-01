
import axios from "axios";


const Base_URL = 'https://wunder-mobility-api.herokuapp.com';
interface PaymentBody {
    customerId: number,
    iban: string,
    owner: string
}
export async function savePaymentData(data: PaymentBody) {
    const res = await axios.post(`${Base_URL}/payment/data`, data);
    return res.data;
}

export async function register(data: PaymentBody) {
   const res = await axios.post(`${Base_URL}/register`, data);
}