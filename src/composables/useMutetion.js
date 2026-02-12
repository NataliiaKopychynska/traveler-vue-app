import { ref } from 'vue'

export const useMutation = ({ mutationFn, onSuccess, onError }) => {
    const data = ref(null)
    const isLoading = ref(false)
    const error = ref(null)

    const mutation = async (...args) => {
        isLoading.value = true
        error.value = null
        try {
            data.value = await mutationFn(...args)
            error.value = null
            onSuccess?.(data)
        } catch (error) {
            error.value = error
            onError?.(error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        data,
        isLoading,
        error,
        mutation,
    }
}
