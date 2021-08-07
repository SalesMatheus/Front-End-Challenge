import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://randomuser.me/api?seed=abc&results=50&' 
});

export default api;