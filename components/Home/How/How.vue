<template>
  <section class="bg-secondary text-white">
    <div class="container mx-auto px-8 py-16 md:py-20">
      <div
        id="How"
        class="pt-8 pb-10 scroll-mt-36 md:scroll-mt-40"
      >
        <h1 class="text-4xl md:text-5xl">How</h1>
        <h2 class="">{{ data.subtitle }}</h2>
      </div>

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

      <h2 class="py-8 mt-4 text-3xl md:text-4xl">Do more</h2>

      <div class="flex flex-col gap-8">
        <HomeHowStep
          class="flex gap-8"
          v-for="(step, index) in data.more"
          :text="step.text"
          :title="step.title"
          :required="step.required"
          :index="index"
        />
      </div>

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
const { data } = await useAsyncData('home-how', () =>
  queryContent('/how').findOne()
)
</script>
