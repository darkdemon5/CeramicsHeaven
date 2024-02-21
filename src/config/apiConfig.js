import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";
const jwt = localStorage.getItem("jwt");
// console.log(jwt);
export const api = axios.create({
  baseURL: API_BASE_URL,
  header: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
