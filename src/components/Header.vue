<template>
  <header class="bg-white/90 backdrop-blur-md fixed w-full z-30 border-b">
    <div class="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
      <div class="flex items-center gap-4">
        <a href="#profile" @click.prevent="scrollTo('#profile')" class="text-xl md:text-2xl font-bold tracking-tight">
          {{ data.name }}
        </a>
        <span class="hidden md:inline-block text-sm text-gray-500">• Fullstack Developer</span>
      </div>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#about" @click.prevent="scrollTo('#about')" class="hover:text-blue-600 transition">About</a>
        <a href="#experience" @click.prevent="scrollTo('#experience')" class="hover:text-blue-600 transition">Experience</a>
        <a href="#projects" @click.prevent="scrollTo('#projects')" class="hover:text-blue-600 transition">Projects</a>
        <a href="#contact" @click.prevent="scrollTo('#contact')" class="hover:text-blue-600 transition">Contact</a>
      </nav>

      <div class="flex items-center gap-3">
        <a :href="data.cv" target="_blank" class="hidden sm:inline-block px-4 py-2 rounded-full border font-medium hover:bg-gray-50">
          Download CV
        </a>
        <button @click="openEmail" class="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:brightness-95">Hire me</button>

        <!-- mobile menu -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-md hover:bg-gray-100">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- mobile menu panel -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white border-t">
        <div class="px-4 py-3 flex flex-col gap-2">
          <a @click.prevent="mobileNav('#about')" href="#about" class="py-2">About</a>
          <a @click.prevent="mobileNav('#experience')" href="#experience" class="py-2">Experience</a>
          <a @click.prevent="mobileNav('#projects')" href="#projects" class="py-2">Projects</a>
          <a @click.prevent="mobileNav('#contact')" href="#contact" class="py-2">Contact</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
  import { ref } from 'vue'
  import data from '../data.json'

  const isOpen = ref(false)
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const mobileNav = (id) => {
    isOpen.value = false
    scrollTo(id)
  }
  
  const openEmail = () => {
    window.location.href = `mailto:${data.email}?subject=Opportunity%20to%20work%20together`
  }
</script>

<style scoped>
  /* small fade for mobile menu */
  .fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
  .fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
