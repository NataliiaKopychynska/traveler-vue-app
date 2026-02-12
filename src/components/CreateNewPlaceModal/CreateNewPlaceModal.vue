<script setup>
import { computed, reactive } from 'vue'
import IButton from '../IComponents/IButton/IButton.vue'
import IInput from '../IComponents/IInput/IInput.vue'
import IInputImage from '../IComponents/IInput/IInputImage.vue'
import IModal from '../IComponents/IModal/IModal.vue'
import Ooui_mapPin from '@/assets/img/icons/Ooui_mapPin.vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['close', 'submit'])

const formData = reactive({
    title: '',
    description: '',
    image: '',
})
const uploadText = computed(() => {
    return formData.image ? 'Image Uploaded' : 'Upload Image'
})

const handleUpload = (url) => {
    formData.image = url
}
</script>

<template>
    <IModal v-if="props.isOpen" @close="emit('close')">
        <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
            <div class="flex gap-1 justify-center font-bold text-center mb-10">
                <Ooui_mapPin class="fill-primary color-primary" />
                Add New Place
            </div>
            <IInput label="location" class="mb-4" v-model="formData.title" />
            <IInput
                label="Description"
                type="textarea"
                class="mb-2"
                v-model="formData.description"
            />
            <div class="flex gap-2 items-center mb-10">
                <img
                    v-if="formData.image"
                    :src="formData.image"
                    alt="avatar"
                    class="w-8 h-8 object-cover"
                />
                <IInputImage @uploaded="handleUpload">{{
                    uploadText
                }}</IInputImage>
            </div>

            <IButton class="w-full" variant="gradient">Add</IButton>
        </form>
    </IModal>
</template>
