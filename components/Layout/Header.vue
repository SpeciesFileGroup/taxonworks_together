<template>
  <header
    ref="rootElement"
    class="fixed w-full z-10 transition-all duration-300"
  >
    <div
      class="relative container mx-auto flex flex-row items-center justify-between lg:justify-normal z-10 px-8"
    >
      <div class="flex flex-row items-center justify-between w-full h-20">
        <div class="flex justify-between items-center gap-4">
          <a
            ref="logoLink"
            href="/#"
            aria-label="Home"
            class="transition ease-in-out opacity-0 duration-300 lg:opacity-100 scale-0 lg:scale-100"
          >
            <TWTLogo class="w-36" />
          </a>
          <nav class="ml-4 flex-row gap-4 hidden lg:flex">
            <a
              v-for="item in MENU_LINKS"
              :href="`#${item}`"
            >
              {{ item }}
            </a>
          </nav>
        </div>
        <div class="flex">
          <RegisterButton />
          <MobileNavbar :menu="MENU_LINKS" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const MENU_LINKS = [
  'What',
  'When',
  'How',
  'Who',
  'Speakers',
  'Schedule',
  'Contact'
]
const rootElement = ref(null)
const logoLink = ref(null)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const y = window.pageYOffset
  if (window.pageYOffset) {
    if (y > 10) {
      logoLink.value.classList.add('opacity-100', 'scale-100')
      rootElement.value.classList.add(
        'backdrop-blur-sm',
        'bg-white',
        'bg-opacity-70'
      )
    } else {
      logoLink.value.classList.remove('opacity-100', 'scale-100')
      rootElement.value.classList.remove(
        'backdrop-blur-sm',
        'bg-white',
        'bg-opacity-70'
      )
    }
  }
}
</script>
