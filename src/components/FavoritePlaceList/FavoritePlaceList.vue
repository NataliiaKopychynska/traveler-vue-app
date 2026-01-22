<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import placesFromApi from '../../stores/placesFromApi.js'
import { ref } from 'vue'
import IIconButton from '../IIconButton/IIconButton.vue'
import IInput from '../IInput/IInput.vue'

const BTNVariant = ref('gradient')

const changeBTNVariant = () => {
    BTNVariant.value = BTNVariant.value === 'gradient' ? 'outline' : 'gradient'
}
</script>
<template>
    <div class="p-6">
        <div class="text-textIcon">Added marks</div>

        <FavoritePlace v-for="place in placesFromApi" :key="place.id">
            <template #title>{{ place.title }}</template>
            <template #description>{{ place.description }}</template>
        </FavoritePlace>

        <IButton
            :variant="BTNVariant"
            @click="changeBTNVariant"
            class="w-full mt-10"
            >Add marker</IButton
        >
    </div>
</template>
