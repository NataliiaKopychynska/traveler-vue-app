import { apiClient } from '../clientFetch'

export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('/user/register', userData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await apiClient.post('/user/login', userData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const logoutUser = async () => {
    try {
        await apiClient.get('/user/logout')
    } catch (error) {
        throw error
    }
}

export const getCurrentUser = async () => {
    try {
        const response = await apiClient.get('/user/me')
        return response.data
    } catch (error) {
        throw error
    }
}

export const refreshCurrentUser = async () => {
    try {
        const response = await apiClient.post('/user/refresh')
        return response.data
    } catch (error) {
        throw error
    }
}
