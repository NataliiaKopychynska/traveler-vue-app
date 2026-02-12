<script setup>
import FavoritePlaceList from '../components/FavoritePlaceList/FavoritePlaceList.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './settings'
import { favoritePlaces } from '../stores/placesFromApi.js'
import Ooui_mapPin from '../assets/img/icons/Ooui_mapPin.vue'

const props = defineProps({
    activeId: {
        type: [String, Number, null],
        default: null,
    },
})

const emit = defineEmits(['change-active-id'])
</script>

<template>
    <div class="w-full h-full items-center text-6xl">
        <MapboxMap
            class="w-full h-full"
            :center="[30.523333, 50.450001]"
            :zoom="10"
            :lngLat="mapSettings.lngLat"
            :access-token="mapSettings.apiToken"
            :map-options="{ style: mapSettings.style }"
        >
            <MapboxMarker
                v-for="mark in favoritePlaces"
                :key="mark.id"
                :lngLat="mark.lngLat"
            >
                <button @click="$emit('change-active-id', mark.id)">
                    <Ooui_mapPin class="fill-primary" />
                </button>
            </MapboxMarker>
        </MapboxMap>
    </div>
</template>

<!-- <template>
    <div class="w-full h-full items-center text-6xl">
        <MapboxMap
            class="w-full h-full"
            :center="[30.523333, 50.450001]"
            :zoom="10"
            :lngLat="mapSettings.lngLat"
            :access-token="mapSettings.apiToken"
            :map-options="{ style: mapSettings.style }"
        >
            <MapboxMarker
                v-for="mark in favoritePlaces"
                :key="mark.id"
                :lngLat="mark.lngLat"
            >
                <button @click="$emit('change-active-id', mark.id)">
                    <Ooui_mapPin class="fill-primary" />
                </button>
            </MapboxMarker>
        </MapboxMap>
    </div>
</template> -->
