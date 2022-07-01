
import axios from "axios";

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
    const res = await axios.post(`https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-paym
    ent-data`, data, config)
    console.log(res.data)
    return res.data;
}

export async function register(data: PaymentBody) {
   const res = await axios.post(`https://wunder-mobility-api.herokuapp.com/register`, data);
   console.log(res.data)
}