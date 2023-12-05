<template>
  <div class="p-8 pl-0">
    <h1
      class="text-lg font-bold"
      :class="item.highlight && 'text-primary-dark'"
    >
      {{ item.title }}
    </h1>
    <p
      v-if="item.description"
      class="text-sm"
      v-html="item.description"
    />
    <a
      v-for="link in item.video"
      :href="link"
      class="text-primary-dark text-sm"
    >
      🎞️ Video
    </a>
    <div class="flex flex-row gap-2 flex-shrink-2 my-4 flex-wrap">
      <div
        v-for="topic in item.topics"
        class="border rounded-md border-secondary p-2"
      >
        {{ topic }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object
  }
})
</script>
