<script setup>
import IButton ....
import { reactive, ref } from 'vue'

const counter = ref(0)
const user = ref({ name: 'Nataliia', age: 30 })
const superUser = reactive({ name: 'Nataliia Super ', age: 30 })

const increment = () => {
    counter.value++
    user.value.age++
    superUser.age++
}
</script>
<template>
    <div class="p-6">
        <IButton variant="gradient" class="w-full mt-10" @click="increment"
            >Counter: {{ counter }}</IButton
        >
        <div>User: {{ user.name }}, Age: {{ user.age }}</div>
        <div>Super User: {{ superUser.name }}, Age: {{ superUser.age }}</div>
    </div>

</template>

---

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

// const { variant } = toRef(props)

// const bgStyles = computed(() => {
//     switch (variant.value) {
//         case 'gradient':
//             return 'bg-gradient-to-r from-[#FFA279] to-[#FFCCBC]'
//         case 'outline':
//             return 'bg-[#FFA279] text-[#FF512F] border-2 border-bg-[#FFA479]'
//         default:
//             return 'bg-[#FFA279]'
//     }
// })
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

<!-- events  -->

@click.stop.once="() => console.log('click start')"
@keydown.enter="() => console.log('keydown start')"
@click.self="() => console.log('click place')"
@focus="() => console.log('focus input')"

         <IInput
            label="Search place"
            class="mt-4 mb-6"
            @click="() => console.log('click')"
        />
        <a
            href="/"
            class="text-bold"
            @click.prevent="() => console.log('prevented')"
            >Click me</a
        >

<!-- ----------- -->

<script setup>
import { ref } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: 'Some label',
    },
})

const value = ref('')

const changeValue = (e) => {
    value.value = e.target.value
}
</script>

<template>
    <div class="w-full text-[#2C2C2C]">
        <label class="block">
            <span class="block text-xs px-3 mb-2"
                >{{ props.label }}: {{ value }}</span
            >
            <input
                @input="changeValue"
                class="w-full text-sm rounded-sm border-[#eaeaea] border py-2 px-3 focus:outline-primary"
                type="text"
            />
        </label>
    </div>
</template>

<!-- props  -->
<script setup>
import { ref } from 'vue'

const props = defineProps({
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

const value = ref('')
</script>

<template>
    <div class="w-full text-[#2C2C2C]">
        <label class="block">
            <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
            <input
                :placeholder="placeholder"
                class="w-full text-sm rounded-sm border-[#eaeaea] border py-2 px-3 focus:outline-primary"
                :type="type"
            />
        </label>
    </div>
</template>
