import axios from "axios";

export const api = axios.create({
  // A baseURL PRECISA terminar com "/api"
  baseURL: "http://localhost:5000/api", 
});