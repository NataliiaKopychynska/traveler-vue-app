<script setup>
import IButton from '../components/IButton/IButton.vue'
</script>

<template>
    <main class="flex h-screen">
        <section
            class="flex-1 flex items-center justify-center px-5 bg-primary"
        >
            <div class="text-white text-center">
                <img
                    class="inline-block mb-6"
                    src="../assets/img/map-pin.svg"
                />
                <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
                <p class="mb-11 leading-6">
                    A clean and intuitive web app that helps you keep track of
                    your favorite places and the destinations you dream of
                    visiting. Start exploring today.
                </p>
                <IButton>Get Started</IButton>
            </div>
        </section>
        <section class="flex-1">
            <img
                class="h-full w-full object-cover"
                src="../assets/img/static-map.png"
                alt="Traveler Illustration"
            />
        </section>
    </main>
</template>
