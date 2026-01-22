<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: String,
    label: {
        type: String,
        default: 'Some label',
    },
    placeholder: {
        type: String,
        default: 'Enter text',
    },
    type: {
        type: String,
        default: 'text',
    },
})

defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])

const value = ref('')
</script>

<template>
    <div class="w-full text-[#2C2C2C]">
        <label class="block">
            <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
            <input
                @input="emit('update:modelValue', $event.target.value)"
                :value="modelValue"
                v-bind="{ ...$props, ...$attrs }"
                class="w-full text-sm rounded-sm border-[#eaeaea] border py-2 px-3 focus:outline-primary"
            />
        </label>
    </div>
</template>
