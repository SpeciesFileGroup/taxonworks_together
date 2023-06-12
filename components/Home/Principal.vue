<template>
  <section class="relative h-screen">
    <LinkedCanvas class="w-full absolute opacity-10 h-full" />
    <div class="container mx-auto top-1/2 relative -translate-y-1/2 p-4">
      <TWTLogo2023 class="sm:h-52 xl:h-80 mx-auto" />
      <h2 class="text-center pt-8 pb-8 text-xl">
        {{ data.description }}
      </h2>
      <h2 class="text-center text-3xl">{{ data.date_title }}</h2>
      <ClientOnly>
        <Countdown
          class="flex text-center justify-center items-center"
          :date="date"
        />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('event', () =>
  queryContent('/event').findOne()
)

const [hours = '00', minutes = '00', seconds = '00'] =
  data.value.time.split(':')

const time = [hours, minutes, seconds].join(':')
const date = new Date(`${data.value.date}T${time}.000Z`)
</script>
