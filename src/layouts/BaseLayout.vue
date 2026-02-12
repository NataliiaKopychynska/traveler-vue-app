<template>
    <main class="flex h-screen">
        <section
            class="flex-1 flex items-center justify-center px-5 bg-primary"
        >
            <div class="text-white text-center max-w-125 w-full">
                <slot></slot>
            </div>
        </section>
        <section class="flex-1">
            <img
                class="h-full w-full object-cover"
                src="../assets/img/static-map.png"
                alt="Traveler Illustration"
            />
        </section>
    </main>
</template>
