import axios from "axios";

const apiAxios = axios.create(
    {
        baseURL: "http://localhost:5000",
        withCredentials: true
    });

export {apiAxios};