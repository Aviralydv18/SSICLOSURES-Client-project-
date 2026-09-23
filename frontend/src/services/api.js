import axios from "axios";

export const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const api = axios.create({
    baseURL: `${BACKEND_URL}/api`
});

export default api;