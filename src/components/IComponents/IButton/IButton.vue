<script setup>
import { defineProps, computed, toRef } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['default', 'gradient', 'outline'].includes(value)
        },
        // reactive: false,
    },
    to: {
        type: String,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
})

const bgStyles = computed(() => {
    switch (props.variant) {
        case 'gradient':
            return 'bg-gradient-to-r from-[#FFA279] to-[#FFCCBC] cursor-pointer hover:from-[#FFA279] hover:to-[#FFA278]'
        case 'outline':
            return 'bg-[#FFA279] text-[#FF512F] border-2 border-bg-[#FFA479]'
        default:
            return 'bg-[#FFA279]'
    }
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
    return isLink.value ? RouterLink : 'button'
})

const toLink = computed(() => {
    return isLink.value ? props.to : undefined
})
</script>

<template>
    <component
        :is="componentName"
        :to="toLink"
        class="rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
        :class="bgStyles"
    >
        <template v-if="isLoading"
            ><div class="animate-pulse">Loading...</div></template
        >

        <template v-else><slot>Hello button</slot></template>
    </component>
</template>
