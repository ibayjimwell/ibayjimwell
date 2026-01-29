<script setup>
    import data from '../data.json'

</script>

<template>
    <div v-for="(item, index) in data.experience" :key="index" class="flex justify-center items-center min-h-[200px] m-4">
        <div class="bg-white border rounded-xl shadow-lg p-6 sm:p-8 max-w-xl w-full transition-transform hover:scale-102 duration-200">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
            <h3 class="text-xl sm:text-2xl font-semibold tracking-tight">{{ item.title }}</h3>
            <span class="text-sm text-gray-700 font-medium">{{ item.company }}</span>
            </div>
            <div class="flex items-center gap-2 mb-3">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m-11 8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12z"/>
            </svg>
            <span class="text-xs text-gray-600">{{ item.duration }}</span>
            </div>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">{{ item.description }}</p>
        </div>
    </div>
</template>