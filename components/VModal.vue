<template>
  <div
    class="fixed z-20 top-0 left-0 w-full h-full flex flex-col justify-center backdrop-blur-md bg-black bg-opacity-5"
    @click="emit('close')"
    @key.esc.stop="emit('close')"
  >
    <div class="relative mx-auto md:max-h-[90vh] overflow-y-auto bg-white">
      <div class="w-full p-8 md:p-6 flex flex-row-reverse">
        <IconClose
          class="w-6 h-6 cursor-pointer"
          @click="() => emit('close')"
        />
      </div>
      <div class="bg-white">
        <slot />
      </div>
      <div>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

const handleKeys = (e) => {
  if (e.key === 'Escape') {
    e.stopPropagation()
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeys)
})
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeys)
})
</script>
