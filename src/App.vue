<script setup>
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import FavoritePlaceList from './components/FavoritePlaceList/FavoritePlaceList.vue'
import HomePage from './views/HomePage.vue'

const onSubmit = (userData) => {
    console.log('Form submitted', userData)
}
</script>

<template>
    <!-- <HomePage /> -->
    <!-- <FavoritePlaceList /> -->
    <!-- <RegistrationForm @submit="onSubmit" /> -->
    <LoginForm @submit="console.log('login')" />
</template>
