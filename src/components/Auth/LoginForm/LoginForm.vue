<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../../IComponents/IButton/IButton.vue'
import IInput from '../../IComponents/IInput/IInput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['submit'])

const userData = reactive({
    email: '',
    password: '',
})

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

        <IButton
            class="mt-6"
            type="submit"
            variant="gradient"
            :isLoading="isLoading"
            >Login</IButton
        >
    </FormContainer>
</template>
