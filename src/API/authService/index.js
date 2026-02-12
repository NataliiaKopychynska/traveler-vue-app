import { apiClient } from '../clientFetch'

export const TOKEN_KEY = 'token'

class authService {
    #token = null

    isLoggedIn() {
        return Boolean(this.#token)
    }
    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token)
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.#token = token
    }

    clearToken() {
        this.#token = null
        localStorage.removeItem(TOKEN_KEY)
        delete apiClient.defaults.headers.common['Authorization']
    }

    async loginUser(body) {
        const { data } = await apiClient.post('/user/login', body)
        const { tokenAccess } = data
        this.setToken(tokenAccess)
    }

    async registerUser(body) {
        const { data } = await apiClient.post('/user/register', body)
        const { tokenAccess } = data
        this.setToken(tokenAccess)
    }

    async logoutUser() {
        await apiClient.get('/user/logout')
        this.clearToken()
    }

    async refreshCurrentUser() {
        const response = await apiClient.post('/user/refresh')
        return response.data
    }

    async getCurrentUser() {
        const response = await apiClient.get('/user/me')
        return response.data
    }
}

export const authServiceInstance = new authService()
