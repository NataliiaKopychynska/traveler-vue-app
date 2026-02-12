<script setup>
import LogOut01 from '@/assets/img/icons/LogOut01.vue'
import { ref } from 'vue'

const emit = defineEmits(['uploaded'])
const MAX_FILE_SIZE = 5 * 1024 * 1024
const errorMessage = ref('')

const handleUpLoading = (event) => {
    const file = event.target.files[0]

    if (file.size > MAX_FILE_SIZE) {
        errorMessage.value = 'File size exceeds 5MB limit.'
        // alert('File size exceeds 5MB limit.')
        return
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        errorMessage.value = ''
        // console.log('Image uploaded:', reader.result)
        emit('uploaded', reader.result)
    }
}
</script>

<template>
    <label class="cursor-pointer hover:text-primary">
        <input
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleUpLoading"
        />
        <span class="flex flex-row gap-2">
            <LogOut01
                class="block -rotate-90 w-5 h-5 stroke-current hover:stroke-primary"
            />
            <span class="underline-text-xs"><slot></slot></span>
        </span>
    </label>
    <div v-if="errorMessage" class="text-xs text-red-500">
        {{ errorMessage }}
    </div>
</template>
