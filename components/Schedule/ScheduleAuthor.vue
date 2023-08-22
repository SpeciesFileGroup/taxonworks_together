<template>
  <div
    v-if="speaker"
    class="flex gap-2 items-center"
  >
    <img
      class="w-10 h-10 rounded-full object-cover"
      :src="speaker.img"
    />
    <div class="flex flex-col">
      <span>{{ speaker.name }}</span>
      <span
        v-if="title"
        class="text-xs"
        >{{ speaker.description }}</span
      >
    </div>
  </div>
  <div
    v-else
    class="flex gap-2 items-center"
  >
    <div
      class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
    >
      <IconPerson class="w-5 h-5 stroke-primary" />
    </div>
    <div class="flex flex-col">
      <span>{{ author }}</span>
      <span
        v-if="typeof title === 'string'"
        class="text-xs"
      >
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  author: string
  title: boolean | string
}

const props = defineProps<IProps>()
const { data } = useNuxtData('home-speakers')

const speaker = data.value.find((item) => item.name === props.author)
</script>
