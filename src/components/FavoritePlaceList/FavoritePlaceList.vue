<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IComponents/IButton/IButton.vue'
import { ref } from 'vue'

const props = defineProps({
    items: {
        required: true,
        type: Array,
    },
    activeId: {
        type: [String, Number],
        default: null,
    },
})

const BTNVariant = ref('gradient')

const changeBTNVariant = () => {
    BTNVariant.value = BTNVariant.value === 'gradient' ? 'outline' : 'gradient'
}

const emit = defineEmits(['place-click'])
</script>
<template>
    <div class="p-6">
        <div class="text-textIcon mb-1">Added marks</div>
        <div
            v-if="items.length === 0"
            class="text-textIcon text-xl font-medium mb-4 mt-12 text-center"
        >
            List is empty
        </div>

        <FavoritePlace
            v-for="place in items"
            :key="place.id"
            :title="place.title"
            :description="place.description"
            :img="place.img"
            :is-active="place.id === activeId"
            @click="emit('place-click', place.id)"
        />
        <!-- <FavoritePlace v-for="place in items" :key="place.id">
            <template #title>{{ place.title }}</template>
            <template #description>{{ place.description }}</template>
        </FavoritePlace> -->

        <IButton
            :variant="BTNVariant"
            @click="changeBTNVariant"
            class="w-full mt-10"
            >Add marker</IButton
        >
    </div>
</template>
