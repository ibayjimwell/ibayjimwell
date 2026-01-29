<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2">Contact</h2>
      <p class="text-gray-600 mb-6">Interested in working together? Send a brief message and I’ll reply as soon as possible.</p>

      <div class="bg-white p-6 rounded-xl shadow-sm">
        <form @submit.prevent="sendEmail" class="grid gap-3">
          <input v-model="name" placeholder="Your name" required class="border px-3 py-2 rounded" />
          <input v-model="email" placeholder="Your email" type="email" required class="border px-3 py-2 rounded" />
          <textarea v-model="message" placeholder="Short message" rows="4" class="border px-3 py-2 rounded" required></textarea>

          <div class="flex items-center gap-3">
            <button type="submit" class="px-4 py-2 rounded-full bg-blue-600 text-white">Send message</button>
            <a :href="`mailto:${data.email}`" class="text-sm text-gray-500">Or email me directly</a>
          </div>

          <p v-if="sent" class="text-sm text-green-600 mt-2">Message prepared — opened in your email client.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import data from '../data.json'

  const name = ref('')
  const email = ref('')
  const message = ref('')
  const sent = ref(false)

  const sendEmail = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${name.value}`)
    const body = encodeURIComponent(`${message.value}\n\nContact: ${name.value} — ${email.value}`)
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`
    sent.value = true
  }
</script>
