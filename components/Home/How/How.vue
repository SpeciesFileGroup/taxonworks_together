<template>
  <section class="bg-secondary text-white">
    <div class="container mx-auto px-8 py-16 md:py-20">
      <h1
        class="text-4xl md:text-5xl pt-8 pb-10 scroll-mt-36 md:scroll-mt-40"
        id="How"
      >
        How
      </h1>
      <ContentRenderer :value="data">
        <div class="flex flex-col gap-8">
          <HomeHowStep
            class="flex gap-8"
            v-for="(step, index) in data.steps"
            :text="step.text"
            :title="step.title"
            :required="step.required"
            :index="index"
          />
        </div>
        <div class="prose prose-base md:prose-lg max-w-none prose-invert">
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
