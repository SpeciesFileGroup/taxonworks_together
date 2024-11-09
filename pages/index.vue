<template>
  <HomeHero />
  <HomeWhat />
  <HomeWhen />
  <HomeHow />
  <HomeWho />
  <HomeSpeakers />
  <HomeSchedule />
  <HomeAwards />
  <HomeContact />
</template>

<script setup>
useHead({
  title: 'TaxonWorks Together',
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'en'
  },
  meta: [
    {
      name: 'description',
      content:
        'Annual event about the collective work in the creation of data to Describe life'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
})
</script>
