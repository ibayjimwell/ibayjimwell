<template>
  <section id="profile" class="relative pt-[130px] pb-12 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
      <div class="flex-shrink-0">
        <div class="rounded-full p-1 bg-white shadow-lg">
          <img :src="profilePic" :alt="data.fullname" class="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-black"/>
        </div>
      </div>

      <div class="max-w-2xl">
        <p class="text-sm text-gray-600 mb-2">Hello — I’m</p>
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">{{ data.fullname }}</h1>
        <p class="text-lg md:text-xl text-gray-700 mb-4">{{ data.profession }} — I build web applications that solve business problems.</p>

        <div class="flex gap-3 flex-wrap mb-4">
          <a :href="data.cv" target="_blank" class="px-5 py-2 rounded-full border font-medium bg-black text-white">Download CV</a>
          <button @click="scrollTo('#projects')" class="px-5 py-2 rounded-full border font-medium hover:bg-gray-100">See Projects</button>
          <button @click="openEmail" class="px-5 py-2 rounded-full border font-medium hover:bg-gray-100">Contact</button>
        </div>

        <div class="flex items-center gap-3">
          <a :href="data.linkedin" target="_blank" aria-label="LinkedIn">
            <img src="../assets/linkedin.png" alt="LinkedIn" class="w-7 h-7"/>
          </a>
          <a :href="data.github" target="_blank" aria-label="GitHub">
            <img src="../assets/github.png" alt="GitHub" class="w-7 h-7"/>
          </a>
          <div class="text-sm text-gray-500">Available for freelance & part-time roles</div>
        </div>
      </div>

      <!-- small KPI badges -->
      <div class="ml-auto hidden md:flex flex-col gap-3">
        <div class="bg-white p-3 rounded-xl shadow-sm text-center">
          <div class="text-sm text-gray-400">Projects</div>
          <div class="text-lg font-semibold">{{ projects.length }}</div>
        </div>
        <div class="bg-white p-3 rounded-xl shadow-sm text-center">
          <div class="text-sm text-gray-400">Experience</div>
          <div class="text-lg font-semibold">{{ experience.length }} yrs*</div>
        </div>
      </div>
    </div>

    <!-- subtle animated SVG / background element -->
    <svg class="absolute right-0 top-0 -z-10 w-[420px] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#g1)"/>
    </svg>
  </section>
</template>

<script setup>
  import data from '../data.json'
  const projects = data.projects || []
  const experience = data.experience || []
  const profilePic = '/profile-pic.png' // place in public/

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openEmail = () => {
    window.location.href = `mailto:${data.email}?subject=Opportunity%20to%20work%20together`
  }
</script>
