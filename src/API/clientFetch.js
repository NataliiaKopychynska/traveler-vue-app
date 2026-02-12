import axios from 'axios'

const API_BASE_URL = 'https://back-for-vue.b.goit.study/'

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete apiClient.defaults.headers.common['Authorization']
    }
}
