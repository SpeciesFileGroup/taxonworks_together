<template>
  <button
    type="button"
    class="p-2 pl-4 pr-4 bg-secondary-dark text-white rounded-sm border-0"
    @click="isModalVisible = true"
  >
    Register
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalVisible = ref(false)
</script>
