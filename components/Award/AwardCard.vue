<template>
  <div class="rounded-lg flex gap-8">
    <div>
      <ImageBadge class="w-24">
        <template #icon>
          <component
            :is="award.icon"
            class="h-10"
          />
        </template>
      </ImageBadge>
    </div>
    <div>
      <h3 class="font-bold text-2xl text-primary">{{ award?.title }}</h3>
      <p class="mb-4">{{ award?.description }}</p>
      <ul>
        <li
          v-for="winner in award?.winners"
          class="font-bold"
        >
          {{ winner }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type Award = {
  title: string
  description: string
  winners?: string[]
}

type Props = {
  award: Award
}

const props = defineProps<Props>()
</script>
