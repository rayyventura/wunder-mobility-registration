
import axios from "axios";

const Endpoint = 'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data'
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
    return res.data;
}

export async function register(data: PaymentBody) {
    await axios.post(`${Base_URL}/register`, data);
}