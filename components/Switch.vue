<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      v-model="value"
      class="sr-only peer"
    />
    <div
      class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"
    ></div>
    <span class="ms-3 text-sm font-bold text-gray-900 dark:text-gray-300">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
const value = defineModel()

defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>
