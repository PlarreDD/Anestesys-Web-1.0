import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: "http://172.16.22.7:5000",
        withCredentials: true
    });

export {apiAxios};