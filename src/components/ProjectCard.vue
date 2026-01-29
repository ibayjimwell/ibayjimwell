<template>
  <article class="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-transform transform hover:-translate-y-1 group flex flex-col h-full"
           tabindex="0" @keydown.enter="openDemo" @click="openDemo" role="button" :aria-label="`Open ${project.title}`">
    <!-- circle icon -->
    <div class="absolute -top-5 -left-5 w-14 h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-white z-20 flex items-center justify-center">
      <img v-if="project.icon" :src="project.icon" :alt="project.title + ' icon'" class="w-full h-full object-cover"/>
      <div v-else class="text-sm font-semibold text-gray-700">{{ initials(project.title) }}</div>
    </div>

    <header class="mb-2 mt-6">
      <h3 class="text-lg font-semibold text-gray-900">{{ project.title }}</h3>
      <p class="text-xs text-gray-500 mt-1">{{ project.slug }}</p>
    </header>

    <p class="text-sm text-gray-600 grow" v-html="project.description"></p>

    <div class="flex flex-wrap gap-2 mt-4">
      <span v-for="(t, i) in project.tech" :key="i" class="text-xs px-3 py-1 rounded-full border bg-white/70">
        {{ t }}
      </span>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <a :href="project.link" @click.stop target="_blank" class="px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100">Live demo</a>
      <div class="flex items-center gap-3">
        <button v-if="project.repo" @click.stop="openRepo" class="text-sm text-blue-800">View repo</button>
          |
        <button @click.stop="openCase" class="text-sm text-blue-800">Case study</button>
      </div>
    </div>
  </article>
</template>

<script setup>
  import { defineEmits } from 'vue'

  const props = defineProps({
    project: { type: Object, required: true }
  })

  const emit = defineEmits(['open-case'])

  const openDemo = () => {
    if (props.project.link) window.open(props.project.link, '_blank')
  }

  const openRepo = () => {
    if (props.project.repo) window.open(props.project.repo, '_blank')
  }

  const openCase = () => emit('open-case', props.project)
  const initials = (s = '') => s.split(/\s+/).map(n => n[0]).slice(0,2).join('').toUpperCase()
</script>
