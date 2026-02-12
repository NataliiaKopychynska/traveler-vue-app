<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '@/API/user'
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutetion'

const router = useRouter()

const {
    isLoading,
    error,
    mutation: handleRegister,
} = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
        setTimeout(() => {
            router.replace('/map')
        }, 300)
    },
    onError: (error) => {
        console.error('Registration failed:', error)
    },
})
</script>

<template>
    <RegistrationForm @submit="handleRegister" :isLoading="isLoading" />
</template>
