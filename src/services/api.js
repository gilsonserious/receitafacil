import axios from 'axios';

// Rodar com IPV4: json-server --watch -d 180 --host 10.253.0.37 db.json

const api = axios.create({
    baseURL: 'http://10.253.0.37:3000'
})

export default api;