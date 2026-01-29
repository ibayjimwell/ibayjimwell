<template>
  <footer class="py-6 bg-white border-t">
    <div class="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
      <div class="mb-2">
        <a href="#profile" @click.prevent="scrollTo('#profile')" class="font-medium text-gray-700">{{ data.name }}</a> • Fullstack Developer
      </div>
      <div>&copy; {{ new Date().getFullYear() }} {{ data.name }}. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
  import data from '../data.json'
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
</script>
