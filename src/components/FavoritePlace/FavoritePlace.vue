<script setup>
import Pencil01 from '@/assets/img/icons/Pencil01.vue'
import IIconButton from '../IIconButton/IIconButton.vue'
import Trash04 from '@/assets/img/icons/Trash04.vue'
</script>

<template>
    <section class="text-[#939393] mb-6 last:mb-0">
        <div class="flex gap-4">
            <img class="w-[76px] h-[76px] shrink-0" src="" alt="" />
            <div class="flex flex-col flex-1">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="font-bold text-sm text-[#2C2C2C]">
                        <slot name="title">Name place</slot>
                    </h2>
                    <div class="flex gap-2">
                        <IIconButton><Pencil01 /></IIconButton>
                        <IIconButton><Trash04 /></IIconButton>
                    </div>
                </div>
                <p class="text-xs line-clamp-3">
                    <slot name="description"> description place </slot>
                </p>
            </div>
        </div>

        <div class="h-[1px] w-full bg-[#ececec] mt-4"></div>
    </section>
</template>
