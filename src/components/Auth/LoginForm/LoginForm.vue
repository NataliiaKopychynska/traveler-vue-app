<script setup>
import { reactive, toRaw, watch } from 'vue'
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
    email: '',
    password: '',
})

watch(
    () => (userData) => {
        console.log('userData changed:')
    },
    {
        immediate: true,
    }
)

const handleFormSubmit = () => {
    emit('submit', toRaw(userData))
}
</script>
<template>
    <FormContainer @submit.prevent="handleFormSubmit">
        <IInput
            v-model="userData.email"
            placeholder="Enter your email"
            label="Email"
            class="mb-4"
        />
        <IInput
            v-model="userData.password"
            placeholder="Enter your password"
            label="Password"
            type="password"
        />

        <IButton class="mt-6" type="submit" variant="gradient">Login</IButton>
    </FormContainer>
</template>
