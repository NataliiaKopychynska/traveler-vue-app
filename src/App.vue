<script setup>
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import FavoritePlaceList from './components/FavoritePlaceList/FavoritePlaceList.vue'
import HomePage from './views/HomePage.vue'

const onSubmit = (e) => {
    console.log('Form submitted', e.name, e.email, e.password)
}
</script>

<template>
    <!-- <HomePage /> -->
    <!-- <FavoritePlaceList /> -->
    <RegistrationForm @submit="onSubmit" />
</template>
