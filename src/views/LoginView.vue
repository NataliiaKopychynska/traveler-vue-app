<script setup>
import { ref } from 'vue'
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { authServiceInstance } from '@/API/authService'
// import { loginUser } from '@/API/user'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutetion'
const router = useRouter()
const {
    isLoading,
    error,
    mutation: handleLogin,
} = useMutation({
    mutationFn: (data) => authServiceInstance.loginUser(data),
    onSuccess: (response) => {
        setTimeout(() => {
            router.replace('/map')
        }, 300)
    },
    onError: (error) => {
        console.error('Login failed:', error)
    },
})
</script>

<template>
    <LoginForm @submit="handleLogin" />
    <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
</template>
