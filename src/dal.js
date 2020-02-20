import Axios from "axios";


export const axios = Axios.create({
    baseURL: 'https://some-domain.com/api/',
    withCredentials: true
  });