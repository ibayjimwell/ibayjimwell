<template>
  <section id="projects" class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold">Projects</h2>
        <p class="text-sm text-gray-500 hidden sm:block">Selected case studies & production demos — click to explore.</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="(p, idx) in projects" :key="p.slug || idx" :project="p" @open-case="openModal"/>
      </div>

      <div class="mt-8 text-center">
        <a :href="data.projectsPage" class="inline-block px-6 py-2 rounded-full border hover:bg-gray-50">See all projects</a>
      </div>
    </div>

    <ProjectModal v-if="activeProject" :project="activeProject" @close="activeProject = null"/>
  </section>
</template>

<script setup>
    import data from '../data.json'
    import ProjectCard from './ProjectCard.vue'
    import ProjectModal from './ProjectModal.vue'
    import { ref } from 'vue'

    const projects = data.projects || []
    const activeProject = ref(null)
    const openModal = (p) => (activeProject.value = p)
</script>
