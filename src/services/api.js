import axios from "axios";

const api = axios.create({
    baseURL: "http://177.85.34.62:63616/",
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;