<script setup>
import IButton from '../components/IComponents/IButton/IButton.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
    <BaseLayout>
        <img class="inline-block mb-6" src="../assets/img/map-pin.svg" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="mb-11 leading-6">
            A clean and intuitive web app that helps you keep track of your
            favorite places and the destinations you dream of visiting. Start
            exploring today.
        </p>
        <IButton to="/auth/login">Get Started</IButton>
    </BaseLayout>
</template>
