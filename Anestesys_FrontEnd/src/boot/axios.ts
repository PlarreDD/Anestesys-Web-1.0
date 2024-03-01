import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: import.meta.env.VITE_ORIGIN1,
        withCredentials: true
    });

export {apiAxios};