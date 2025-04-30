<script setup lang="ts">
import { ref } from 'vue'
import ls from "@livesession/browser"

const count = ref(0)

const trackCount = () => {
  count.value++
  ls.track("Counter", { value: count.value })
}
</script>

<template>
  <div class="card">
    <button type="button" @click="trackCount">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>