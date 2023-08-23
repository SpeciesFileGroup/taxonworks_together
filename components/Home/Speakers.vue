<template>
  <section>
    <div class="container mx-auto px-8 py-16 md:py-20">
      <h1
        class="text-4xl md:text-5xl pt-8 pb-12 scroll-mt-36 md:scroll-mt-40"
        id="Speakers"
      >
        Speakers
      </h1>
      <div class="flex flex-row flex-wrap justify-around gap-8">
        <div
          v-for="item in data"
          class="flex flex-col items-center"
        >
          <img
            class="w-40 h-40 rounded-full object-cover"
            :src="item.img"
            :alt="item.name"
          />
          <div
            class="relative bottom-4 bg-secondary w-44 text-white text-center p-2 flex flex-col rounded-md"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs mt-1">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-speakers', () =>
  queryContent('speakers').find()
)
</script>
