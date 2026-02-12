<script setup>
import { router } from '@/router'
import BaseLayout from '../layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <BaseLayout>
        <section class="flex justify-center gap-4 mb-6">
            <router-link to="/auth/login" active-class="border-b-2"
                >Login</router-link
            >
            <router-link to="/auth/register" active-class="border-b-2"
                >Register</router-link
            >
        </section>
        <router-view />
    </BaseLayout>
</template>
