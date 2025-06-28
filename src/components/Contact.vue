<script setup>
    import data from '../../data.json'

</script>

<template>
  <!-- Contact Section -->
  <section id="contact" class="py-20 text-center m-4">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-bold mb-4 tracking-tight">Contact Me</h2>
      <p class="text-lg text-gray-600 mb-8">Feel free to reach out via email or social media!</p>
      <a
        :href="`mailto:${data.email}`"
        class="inline-block px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {{ data.email }}
      </a>
    </div>
  </section>
</template>