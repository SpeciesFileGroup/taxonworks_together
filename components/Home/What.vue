<template>
  <section class="bg-secondary text-white">
    <div class="container mx-auto px-8 py-16 md:py-20 relative">
      <h1
        class="text-4xl md:text-5xl pt-8 scroll-m-40"
        id="What"
      >
        What
      </h1>
      <ContentRenderer :value="data">
        <div class="prose prose-base md:prose-lg max-w-none prose-invert">
          <ContentRendererMarkdown :value="data" />
        </div>
        <template #empty></template>
      </ContentRenderer>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-what', () =>
  queryContent('/what').findOne()
)
</script>
