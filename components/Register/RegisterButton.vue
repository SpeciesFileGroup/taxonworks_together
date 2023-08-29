<template>
  <a
    class="p-2 pl-4 pr-4 bg-secondary text-white rounded-sm border-0"
    :href="data.registration_form"
  >
    Register
  </a>
</template>

<script setup>
const { data } = await useAsyncData('event', () =>
  queryContent('/event').findOne()
)
</script>
