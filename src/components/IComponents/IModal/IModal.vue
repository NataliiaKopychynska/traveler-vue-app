<script setup>
import X from '../../../assets/img/icons/X.vue'
// import IInputImage from '../IInput/IInputImage.vue'
import { onMounted, onUnmounted, Teleport, ref } from 'vue'

const emit = defineEmits(['close'])
// const imgURLBase64 = ref('')

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'initial'
})
</script>

<template>
    <teleport to="body">
        <div
            class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
            @click.self="emit('close')"
        >
            <div
                class="relative bg-white min-w-87.5 m-auto text-black rounded-2xl p-10"
            >
                <button>
                    <x
                        class="absolute right-3 top-3 w-6 h-6 cursor-pointer hover:stroke-primary"
                        @click="emit('close')"
                    />
                </button>
                <!-- <img v-if="imgURLBase64" :src="imgURLBase64" alt="" />
                <IInputImage @uploaded="(base64) => (imgURLBase64 = base64)" /> -->
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>
