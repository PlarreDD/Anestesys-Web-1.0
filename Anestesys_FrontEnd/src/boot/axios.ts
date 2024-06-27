import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: import.meta.env.VITE_ORIGIN1,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

export {apiAxios};