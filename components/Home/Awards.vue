<template>
  <section class="bg-white text-white">
    <div class="container mx-auto px-8 py-16 md:py-20 relative text-black">
      <h1
        class="text-4xl md:text-5xl pt-8 scroll-mt-36 md:scroll-mt-40"
        id="Awards"
      >
        Awards
      </h1>

      <div class="flex justify-between gap-8 py-8">
        <div>
          <div
            class="prose prose-base md:prose-lg max-w-none font-hind mb-10"
            v-html="data.description"
          />
          <span>* Lifetime, once only winners</span>
        </div>

        <div class="hidden lg:block">
          <ImageAwardTrophy
            class="h-96 lg:h-72"
            :year="data.year"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <AwardCard
          v-for="award in data.awards"
          :award="award"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-awards', () =>
  queryContent('/awards').findOne()
)
</script>
