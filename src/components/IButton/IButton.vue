<script setup>
import { defineProps, computed, toRef } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['default', 'gradient', 'outline'].includes(value)
        },
        // reactive: false,
    },
})

const bgStyles = computed(() => {
    switch (props.variant) {
        case 'gradient':
            return 'bg-gradient-to-r from-[#FFA279] to-[#FFCCBC]'
        case 'outline':
            return 'bg-[#FFA279] text-[#FF512F] border-2 border-bg-[#FFA479]'
        default:
            return 'bg-[#FFA279]'
    }
})
</script>

<template>
    <button
        class="rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
        :class="bgStyles"
    >
        <div v-if="!$slots.default">Hello default slot</div>
        <slot>Hello button</slot>
    </button>
</template>
