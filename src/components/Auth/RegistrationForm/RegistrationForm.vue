<script setup>
import { ref } from 'vue'
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'

const emit = defineEmits(['submit'])

const name = ref('')
const email = ref('')
const password = ref('')

const handleFormSubmit = () => {
    emit('submit', {
        name: name.value,
        email: email.value,
        password: password.value,
    })
}
</script>
<template>
    <form
        @submit.prevent="handleFormSubmit"
        class="max-[500px] w-full p-10 rounded-2xl flex flex-col bg-white shadow-md"
    >
        <IInput
            v-model="name"
            placeholder="Enter your username"
            label="Username"
            class="mb-4"
        />
        <IInput
            v-model="email"
            placeholder="Enter your email"
            label="Email"
            class="mb-4"
        />
        <IInput
            v-model="password"
            placeholder="Enter your password"
            label="Password"
            class="mb-4"
            type="password"
        />

        <IButton class="mt-6" type="submit" variant="gradient"
            >Register</IButton
        >
    </form>
</template>
