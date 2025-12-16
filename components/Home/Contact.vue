<template>
  <section class="bg-secondary text-white">
    <div class="container mx-auto px-8 py-16 md:py-20 relative">
      <h1
        class="text-4xl md:text-5xl pt-8 scroll-mt-36 md:scroll-mt-40"
        id="Contact"
      >
        Contact
      </h1>

      <div class="prose prose-base md:prose-lg max-w-none prose-invert">
        <ContentRenderer :value="data" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-contact', () =>
  queryCollection('home').path('/home/contact').first()
)
</script>
