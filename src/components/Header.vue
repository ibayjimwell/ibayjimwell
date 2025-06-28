<script setup>
    import { ref } from 'vue'
    import data from '../../data.json'

    let isMenuOpen = ref(false)

    const scrollToSection = (sectionId, closeMenu = false) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (closeMenu) {
        isMenuOpen.value = false;
      }
    }
</script>

<template>
    <!-- Navbar -->
    <header class="bg-white fixed w-full z-20 shadow-md">
      <div class="max-w-5xl mx-auto flex justify-between items-center h-20 px-4 md:px-0">
        <a 
          href="#profile"
          @click.prevent="scrollToSection('profile')" 
          class="text-2xl font-bold tracking-tight">
            {{ data.name }}
        </a>
        <nav class="hidden md:flex gap-6 text-base font-medium">
          <a
            href="#about"
            @click.prevent="scrollToSection('about')"
            class="transition-colors duration-200 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#experience"
            @click.prevent="scrollToSection('experience')"
            class="transition-colors duration-200 hover:text-blue-600"
          >
            Experience
          </a>
          <a
            href="#projects"
            @click.prevent="scrollToSection('projects')"
            class="transition-colors duration-200 hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            @click.prevent="scrollToSection('contact')"
            class="transition-colors duration-200 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
        <div class="md:hidden relative">
            <button @click="isMenuOpen = !isMenuOpen" class="flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-100 transition">
              <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 transition-all duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          <transition name="fade">
            <div v-if="isMenuOpen" class="absolute right-0 mt-3 w-44 bg-white border rounded-xl shadow-2xl space-y-2 py-4 z-20 animate-[fade-in_0.2s_ease]">
              <a href="#about" @click.prevent="scrollToSection('about', true)" class="block text-center py-2 hover:bg-gray-100 rounded transition font-semibold">About</a>
              <a href="#experience" @click.prevent="scrollToSection('experience', true)" class="block text-center py-2 hover:bg-gray-100 rounded transition font-semibold">Experience</a>
              <a href="#projects" @click.prevent="scrollToSection('projects', true)" class="block text-center py-2 hover:bg-gray-100 rounded transition font-semibold">Projects</a>
              <a href="#contact" @click.prevent="scrollToSection('contact', true)" class="block text-center py-2 hover:bg-gray-100 rounded transition font-semibold">Contact</a>
            </div>
          </transition>
        </div>
      </div>
    </header>
</template>