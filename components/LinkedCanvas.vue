<template>
  <canvas ref="rootElement" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Canvas } from '@/libs/Linked/Canvas'

const rootElement = ref<HTMLCanvasElement>()
let canvasLinked

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeMount(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  const size = Math.floor(window.innerWidth / 13)

  if (canvasLinked) {
    canvasLinked?.stop()
  }

  canvasLinked = new Canvas({
    element: rootElement.value as HTMLCanvasElement,
    points: {
      total: size,
      size: 4,
      color: '#CDCABA',
      velocity: {
        x: 4,
        y: 5
      }
    },

    lineColor: '#CDCABA',
    distance: 150,
    backgroundColor: 'rgba(0,0,0,0)'
  })
}
</script>
