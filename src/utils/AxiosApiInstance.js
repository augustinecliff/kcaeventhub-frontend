import axios from "axios";

const API_URL = "http://192.168.1.104:8080";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = API_URL;
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async config => {
        const keys = localStorage.getItem('@AUTH_LOCAL_STORE_KEY');
        config.headers = {
            'Authorization': `Bearer ${keys}`,
            "Content-Type": "application/json",
            'Accept': 'application/json',
        }
        return config;
    },
    error => {
        Promise.reject(error).then(e => {
            console.log(e)
        });
    });
export default axiosApiInstance;
