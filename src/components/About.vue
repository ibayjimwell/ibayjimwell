<script setup>
  import data from '../../data.json'

</script>

<template>
    <!-- About Section -->
    <section v-for="(item, index) in data.section" :key="index" id="about" class="py-16 bg-gray-50 m-4 rounded-xl shadow-xl">
      <div class="max-w-2xl mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ item.title }}</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ item.content }}
        </p>
      </div>
    </section>
</template>