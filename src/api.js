import { axios } from './dal';

export const api =  {
    sendBooking : (values) => axios.post('/booking',values)
}