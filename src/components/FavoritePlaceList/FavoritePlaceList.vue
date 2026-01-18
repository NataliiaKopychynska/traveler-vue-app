<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import placesFromApi from '../../stores/placesFromApi.js'
import { reactive, ref } from 'vue'

const counter = ref(0)
const user = ref({ name: 'Nataliia', age: 30 })
const superUser = reactive({ name: 'Nataliia Super ', age: 30 })

const increment = () => {
    counter.value++
    user.value.age++
    user.value.name = user.value.name === 'Nataliia' ? 'Kopicinska' : 'Nataliia'
    superUser.age++
    superUser.name =
        superUser.name === 'Nataliia Super '
            ? 'Kopicinska Super '
            : 'Nataliia Super '
}
</script>
<template>
    <div class="p-6">
        <div class="text-textIcon">Added marks</div>

        <FavoritePlace v-for="place in placesFromApi" :key="place.id">
            <template #title>{{ place.title }}</template>
            <template #description>{{ place.description }}</template>
        </FavoritePlace>

        <IButton class="w-full mt-10">Add marker</IButton>
        <IButton class="w-full mt-10" @click="increment"
            >Counter: {{ counter }}</IButton
        >
        <div>User: {{ user.name }}, Age: {{ user.age }}</div>

        <div>Super User: {{ superUser.name }}, Age: {{ superUser.age }}</div>
    </div>
</template>
