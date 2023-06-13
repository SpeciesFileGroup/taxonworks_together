<template>
  <button
    type="button"
    class="inline-flex items-center p-4 z-50 ml-3 text-sm text-primary-content rounded-lg lg:hidden"
    title="Menu"
    aria-controls="mobile-menu"
    :aria-expanded="isMenuVisible"
    @click="toggleMenu"
  >
    <span class="sr-only">Open main menu</span>
    <IconClose
      class="w-6 h-6"
      v-if="isMenuVisible"
    />
    <IconHamburger
      class="w-6 h-6"
      v-else
    />
  </button>

  <AnimationOpacity>
    <div
      v-if="isMenuVisible"
      class="absolute top-full left-0 w-full z-50 bg-white text-base-content block shadow-md md:hidden"
    >
      <nav class="font-normal container mx-auto">
        <ul class="flex flex-col m-0 p-0 border-t border-base-border">
          <li
            v-for="(item, index) in menuLinks"
            :key="index"
            class="border-b border-base-border"
          >
            <a
              :href="`#${item}`"
              class="text-base-content w-full p-4 pt-3 pb-3 block box-border"
            >
              {{ item }}
            </a>
          </li>
          <li class="border-b border-base-border p-4">
            <RegisterButton @click="() => emit('register')" />
          </li>
        </ul>
      </nav>
    </div>
  </AnimationOpacity>
</template>

<script setup>
import { ref } from 'vue'

const menuLinks = ['When', 'How', 'Who', 'Speakers', 'Schedule', 'Contact']
const isMenuVisible = ref(false)

const emit = defineEmits('register')

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>
