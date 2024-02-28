import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: "http://172.16.20.22:5000",
        withCredentials: true
    });

export {apiAxios};