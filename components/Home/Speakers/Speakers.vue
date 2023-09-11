<template>
  <section>
    <div class="container mx-auto px-8 py-16 md:py-20">
      <h1
        class="text-4xl md:text-5xl pt-8 pb-12 scroll-mt-36 md:scroll-mt-40"
        id="Speakers"
      >
        Speakers
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-around gap-4"
      >
        <HomeSpeakersBox
          v-for="item in data"
          :key="item.name"
          :speaker="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-speakers', () =>
  queryContent('speakers').find()
)
</script>
