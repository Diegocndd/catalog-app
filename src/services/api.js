import axios from 'axios';

const api = axios.create({
    baseURL: "http://api.themoviedb.org/"
});

export default api;