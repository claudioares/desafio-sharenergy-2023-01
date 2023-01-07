import axios from "axios";

const apiMongoDB = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const api =  axios.create({
    baseURL: 'https://randomuser.me/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000,
});

export const apiRandomDog = axios.create({
    baseURL: 'https://random.dog/',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000,
})

export default apiMongoDB;