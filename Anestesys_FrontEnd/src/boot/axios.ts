import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: "http://172.16.20.58:5000",
        withCredentials: true
    });

export {apiAxios};