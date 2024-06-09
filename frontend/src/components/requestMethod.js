import  axios  from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjNlMzgxMmEzMTFkNTMzY2QzZDIwNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTc5MDA0MDUsImV4cCI6MTcxODE1OTYwNX0.0zF9XpJeSmszUNsEYh_-8vvrXhrAx57s7bG2sXwZN3k"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});