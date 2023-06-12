<template>
  <section>
    <div class="container mx-auto p-8">
      <h1
        class="text-4xl pt-8 scroll-mt-28"
        id="How"
      >
        How
      </h1>
      <ContentRenderer :value="data">
        <div class="prose prose-base max-w-none">
          <ContentRendererMarkdown :value="data" />
        </div>
        <template #empty></template>
      </ContentRenderer>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-how', () =>
  queryContent('/how').findOne()
)
</script>
