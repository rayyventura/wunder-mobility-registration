
import axios from "axios";

const Endpoint =  process.env.REACT_APP_ENDPOINT
const Base_URL = process.env.REACT_APP_BASE_URL;
function createConfig(token: string) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

interface PaymentBody {
    customerId: number,
    iban: string,
    owner: string
}
export async function savePaymentData(data: PaymentBody) {
    const config = createConfig("")
    const res = await axios.post(`${Endpoint}`, data, config)
    console.log(res.data)
    return res.data;
}

export async function register(data: PaymentBody) {
   const res = await axios.post(`https://wunder-mobility-api.herokuapp.com/register`, data);
   console.log(res.data)
}