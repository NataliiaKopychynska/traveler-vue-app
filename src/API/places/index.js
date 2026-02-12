import { apiClient } from '../clientFetch'

export const getFavoritePlaces = async () => {
    try {
        const { data } = await apiClient.get('/points')
        return data
    } catch (error) {
        throw error
    }
}

export const addFavoritePlace = async (placeData) => {
    try {
        const { data } = await apiClient.post('/points', placeData)
    } catch (error) {
        throw error
    }
}

export const updateFavoritePlace = async (updatedData) => {
    try {
        const { data } = await apiClient.put(`/points`, updatedData)
        return data
    } catch (error) {
        throw error
    }
}

export const deleteFavoritePlace = async (id) => {
    try {
        const { data } = await apiClient.delete(`/points`, id)
        return data
    } catch (error) {
        throw error
    }
}
