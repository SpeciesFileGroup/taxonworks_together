<template>
  <a
    v-if="data?.registration_form"
    class="p-2 px-4 bg-secondary rounded text-white border-0"
    :href="data?.registration_form"
  >
    Register
  </a>
</template>

<script setup>
const { data } = await useAsyncData('event', () =>
  queryCollection('event').first()
)
</script>
