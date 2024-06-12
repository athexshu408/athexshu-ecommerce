import  axios  from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjNlMzgxMmEzMTFkNTMzY2QzZDIwNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTgwNzQ4NDEsImV4cCI6MTcxODMzNDA0MX0.SxjLgeSz6hxsgQ_Di6UQih_eJqpvpgZC9Wy-028e6tY"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});