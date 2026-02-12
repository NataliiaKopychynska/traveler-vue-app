<script setup>
import MapSection from '../map/MapSection.vue'
import FavoritePlaceList from '../components/FavoritePlaceList/FavoritePlaceList.vue'
import { onMounted, ref } from 'vue'
import { getFavoritePlaces } from '@/API/places'

const favoritePlaces = ref([])
const activeID = ref(null)
const map = ref(null)
const changeActiveId = (id) => {
    activeID.value = id
}

const changePlace = (id) => {
    const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
    changeActiveId(id)

    if (!map.value) return
    map.value.flyTo({
        center: lngLat,
        zoom: 14,
    })
}

onMounted(async () => {
    const { data } = await getFavoritePlaces()
    favoritePlaces.value = data
    console.log(data)
})
</script>

<template>
    <main class="flex h-screen">
        <div class="bg-white h-full w-100 shrink-0 overflow-auto pb-10">
            <FavoritePlaceList
                :items="favoritePlaces"
                :active-id="activeID"
                @place-click="changePlace"
            />
        </div>

        <MapSection
            :active-id="activeID"
            @change-active-id="changeActiveId"
            @mb-created="(mb) => (map.value = mb)"
        />
    </main>
</template>

<!-- <script setup>
import MapSection from '../map/MapSection.vue'
import FavoritePlaceList from '../components/FavoritePlaceList/FavoritePlaceList.vue'
import { onMounted, ref } from 'vue'
import { getFavoritePlaces } from '@/API/places'

const favoritePlaces = ref([])
const activeID = ref(null)
const map = ref(null)
const changeActiveId = (id) => {
    activeID.value = id
}

const changePlace = (id) => {
    const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
    changeActiveId(id)

    if (!map.value) return
    map.value.flyTo({
        center: lngLat,
        zoom: 14,
    })
}

onMounted(async () => {
    const { data } = await getFavoritePlaces()
    favoritePlaces.value = data
    console.log(data)
})
</script>

<template>
    <main class="flex h-screen">
        <div class="bg-white h-full w-100 shrink-0 overflow-auto pb-10">
            <FavoritePlaceList
                :items="favoritePlaces"
                :active-id="activeID"
                @place-click="changePlace"
            />
        </div>

        <MapSection
            :active-id="activeID"
            @change-active-id="changeActiveId"
            @mb-created="(mb) => (map.value = mb)"
        />
    </main>
</template> -->
