<script setup>
    import data from '../data.json'

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
    <footer class="py-6 px-4 bg-white border border-gray-200">
        <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <a  
            href="#profile"
            @click.prevent="scrollToSection('profile')"  
            class="font-semibold text-gray-700"
            >
                {{ data.name }}
            </a>
            <span class="text-gray-500 text-sm">
                &copy;{{ new Date().getFullYear() }} All rights reserved.
            </span>
        </div>
    </footer>
</template>
