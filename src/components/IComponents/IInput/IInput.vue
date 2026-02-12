<script setup>
import { ref, computed } from 'vue'

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

const baseStyles =
    'w-full text-sm rounded-[12px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary'

const isTextarea = computed(() => props.type === 'textarea')
const inputStyles = computed(() => {
    return isTextarea.value ? baseStyles + ' resize-none h-20' : baseStyles
})
const componentName = computed(() => {
    return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
    <div class="w-full text-[#2C2C2C]">
        <label class="block">
            <span class="block text-start text-sm font-medium px-3 mb-2">{{
                props.label
            }}</span>
            <component
                :is="componentName"
                @input="emit('update:modelValue', $event.target.value)"
                :value="modelValue"
                v-bind="{ ...$props, ...$attrs }"
                :class="inputStyles"
            />
        </label>
    </div>
</template>
