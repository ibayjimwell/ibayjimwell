<script setup>
    import data from '../data.json'

    const downloadCV = () => {
        alert('CV download functionality is not implemented yet.')
    }

    const scrollTo = (id) => {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }

    const openLink = (url) => {
        window.open(url, '_blank')
    }
</script>

<template>
    <!-- Hero Section -->
    <section
      id="profile"
      class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 py-12 md:py-20 pt-[17vh] md:pt-[17vh] px-4 sm:px-8"
    >
      <div class="flex-shrink-0 shadow-lg rounded-full p-1.5 bg-white mb-2 md:mb-0">
        <img
          src="../../public/profile-pic.png"
          :alt="data.name"
          class="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-black"
        />
      </div>
      <div class="w-full max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
        <p class="text-base sm:text-lg mb-1 sm:mb-2 tracking-wide">Hello, I'm</p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 leading-tight">
          {{ data.fullname }}
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 font-medium">{{ data.profession }}</p>
        <div class="flex flex-col sm:flex-row w-full justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            @click="downloadCV"
            class="bg-white border border-black px-5 sm:px-6 py-2 rounded-full shadow hover:bg-gray-100 font-medium transition"
          >
            Download CV
          </button>
          <button
            @click="scrollTo('#contact')"
            class="bg-black text-white px-5 sm:px-6 py-2 rounded-full font-medium shadow transition"
          >
            Contact Info
          </button>
        </div>
        <div class="flex justify-center md:justify-start gap-5 sm:gap-6">
          <img
            src="../assets/linkedin.png"
            alt="LinkedIn"
            class="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition"
            @click="openLink(data.linkedin)"
          />
          <img
            src="../assets/github.png"
            alt="GitHub"
            class="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition"
            @click="openLink(data.github)"
          />
        </div>
      </div>
    </section>
</template>