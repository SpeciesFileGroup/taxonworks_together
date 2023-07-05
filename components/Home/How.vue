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
          <div
            class="flex gap-8"
            v-for="(step, index) in data.steps"
          >
            <div
              class="flex h-8 w-8 shrink-0 items-center justify-center md:h-16 md:w-16 md:text-3xl w bg-gradient-to-tl from-primary to-secondary text-white font-medium font-hind opacity-100"
            >
              {{ convertToTwoDigits(index + 1) }}
            </div>
            <div
              class="flex w-full flex-col items-center justify-between gap-4 rounded-md md:flex-row md:gap-10 pb-4 md:pb-8 relative"
            >
              <div class="flex flex-col items-start gap-2 md:gap-4 w-full">
                <div>
                  <h3 class="md:text-xl font-bold text-primary">
                    {{ step.title }}
                  </h3>
                  <p
                    class="mt-2 text-sm text-heather md:text-base"
                    v-html="step.text"
                  />
                </div>
              </div>
              <div
                class="from-primary to-secondary w-full h-px bg-gradient-to-r absolute bottom-0"
              />
            </div>
          </div>
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
import { convertToTwoDigits } from '@/utils'

const { data } = await useAsyncData('home-how', () =>
  queryContent('/how').findOne()
)
</script>
