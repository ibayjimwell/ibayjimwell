<script setup>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import ExperienceCard from './components/ExperienceCard.vue'
  import ProjectCard from './components/ProjectCard.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
</script>

<template>

    <!-- Header -->
    <Header />

    <!-- Hero -->
    <Hero />

    <!-- About -->
     <About />

    <!-- Experience Section -->
    <section id="experience" class="py-20 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">
          Experience
        </h2>
        <ExperienceCard />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50 text-center">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">
          Projects
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <Contact />

    <!-- Footer -->
    <Footer />
</template>