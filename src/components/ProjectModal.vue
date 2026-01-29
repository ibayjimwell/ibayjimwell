<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center p-4" @keydown.esc="$emit('close')">
    <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>

    <div class="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 z-50">
      <div class="flex items-start gap-4">
        <img v-if="project.icon" :src="project.icon" alt="icon" class="w-12 h-12 rounded-full object-cover border"/>
        <div>
          <h3 class="text-xl font-semibold">{{ project.title }}</h3>
          <p class="text-sm text-gray-500">{{ project.slug }}</p>
        </div>
        <button @click="$emit('close')" class="ml-auto text-gray-400 hover:text-gray-700">Close</button>
      </div>

      <hr class="my-4"/>

      <div>
        <h4 class="text-sm font-semibold text-gray-700 mb-1">Problem</h4>
        <p class="text-gray-700 mb-3">{{ project.caseStudy.problem }}</p>

        <h4 class="text-sm font-semibold text-gray-700 mb-1">Solution</h4>
        <p class="text-gray-700 mb-3">{{ project.caseStudy.solution }}</p>

        <h4 class="text-sm font-semibold text-gray-700 mb-1">Impact</h4>
        <p class="text-gray-700 mb-3">{{ project.caseStudy.impact }}</p>

        <div class="mt-4 flex gap-3">
          <a :href="project.link" target="_blank" class="px-4 py-2 rounded-full bg-blue-600 text-white">Open demo</a>
          <a v-if="project.repo" :href="project.repo" target="_blank" class="px-4 py-2 rounded-full border">View repo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({ project: { type: Object, required: true } })
</script>
