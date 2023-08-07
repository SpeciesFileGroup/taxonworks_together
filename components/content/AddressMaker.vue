<template>
  <span
    class="text-primary cursor-pointer"
    @click="openClient"
  >
    <span v-html="data.username" />
    <template v-for="(item, index) in data.host">
      <IconAt
        class="h-4 inline"
        v-if="index === 0"
      />
      <IconDot
        class="inline h-4 w-1"
        v-else
      />
      <span v-html="item" />
    </template>
  </span>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
}

interface IAddress {
  username: string
  host: string[]
}

const props = defineProps<Props>()
const data = computed<IAddress>(() => {
  const [username, ...rest] = props.items

  return {
    username,
    host: rest
  }
})

function openClient() {
  const [username, ...rest] = props.items

  document.location.href = `mailto:${username}@${rest.join('.')}`
}
</script>
