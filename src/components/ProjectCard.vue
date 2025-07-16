<script setup>
    import data from '../../data.json'

    const openLink = (url) => {
        window.open(url, '_blank')
    }
</script>

<template>
  <div
    v-for="(item, index) in data.projects"
    :key="index"
    @click="openLink(item.link)"
    class="bg-white p-8 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col relative overflow-hidden group h-full"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

    <!-- Title -->
    <h3 class="text-2xl font-semibold text-gray-900 mb-1 z-10 relative tracking-tight">
        {{ item.title }}
    </h3>

    <!-- Description takes up available space -->
    <p class="text-gray-600 text-base leading-relaxed z-10 relative grow" v-html="item.description">
        
    </p>

    <!-- Spacer to push the button to bottom -->
    <div class="flex-grow"></div>

    <!-- Button fixed at bottom-right -->
    <div class="flex justify-end z-10 relative mt-4">
        <a
            :href="item.link"
            target="_blank"
            class="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold shadow hover:bg-blue-100 transition-colors duration-200"
        >
            Live demo
        </a>
    </div>
  </div>
</template>