import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-ominstack.herokuapp.com'
});

export default api;