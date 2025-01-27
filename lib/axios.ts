import axios from "axios";

export const req = axios.create({
    baseURL: 'http://10.0.2.2:8080/',
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
})