<template>
  <HomePrincipal />
  <HomeWhat />
  <HomeWhen />
  <HomeHow />
  <HomeWho />
  <HomeSpeakers />
  <HomeSchedule />
</template>

<script setup>
useHead({
  title: 'TaxonWorks Together 2023',
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
  ]
})
</script>
