<template>
  <div class="welcome-container">
    <a href="https://nuxt.com" target="_blank">
      <img src="/nuxt.svg" class="logo nuxt" alt="Nuxt logo" />
    </a>
    <div class="plus">
      +
    </div>
    <a href="https://livesession.dev" target="_blank">
      <img src="/ls.png" class="logo livesession" alt="LiveSession logo" />
    </a>

    <Counter />
    <p class="read-the-docs">Click on the Vue or LiveSession logos to learn more</p>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const trackCount = () => {
  count.value++
}
</script>

<style scoped>
.plus {
  font-size: 2rem;
  font-weight: bold;
  color: #646cff;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.nuxt:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.livesession:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.read-the-docs {
  color: #888;
}
</style>

