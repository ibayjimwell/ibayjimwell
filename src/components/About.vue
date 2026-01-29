<template>
  <section id="about" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4">About</h2>
      <p class="text-gray-700 mb-6" v-html="data.section[0].content"></p>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <span v-for="(tech, i) in skills" :key="i" class="px-3 py-2 bg-gray-50 rounded-full text-sm text-gray-700 border">
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
  import data from '../data.json'
  const skills = [
    'Vue 3', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript', 'Python'
  ]
</script>
