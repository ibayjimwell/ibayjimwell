<template>
  <section id="experience" class="py-12 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6">Experience</h2>
      <div class="space-y-4">
        <article v-for="(item, idx) in data.experience" :key="idx" class="bg-white border rounded-xl p-4 sm:p-6 shadow-sm flex gap-4 items-start">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-sm font-semibold">
              {{ initials(item.company) }}
            </div>
          </div>
          <div>
            <div class="flex items-baseline gap-3">
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              <span class="text-sm text-gray-500">{{ item.company }}</span>
            </div>
            <div class="text-xs text-gray-400 mb-2">{{ item.duration }}</div>
            <p class="text-gray-700 text-sm">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
    import data from '../data.json'
    const initials = (s = '') => s.split(/\s+/).map(n => n[0]).slice(0,2).join('').toUpperCase()
</script>
