import axios from 'axios';

// Estabilishes conection to Marvel's API
const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
});

export { api };