<template>
  <footer class="w-full bg-secondary-dark text-white">
    <div
      class="container p-8 mx-auto flex md:flex-row justify-between gap-12 flex-col-reverse"
    >
      <div class="flex flex-col">
        <a href="https://speciesfilegroup.org">
          <img
            src="~/assets/images/sfg_logo.svg"
            class="w-20"
          />
        </a>
      </div>
      <div class="flex flex-col md:flex-row gap-6 md:gap-24">
        <div v-for="(links, section) in links">
          <div class="mb-2 text-lg font-bold capitalize">{{ section }}</div>
          <ul>
            <li
              v-for="item in links"
              :key="item.url"
              class="my-2"
            >
              <a
                class="text-primary"
                :href="item.url"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = {
  code: [
    {
      title: 'GitHub Repository',
      url: 'https://github.com/SpeciesFileGroup/taxonworks_together'
    }
  ],
  social: [
    {
      title: 'TaxonWorks Mastodon',
      url: 'https://fosstodon.org/@TaxonWorks'
    },
    {
      title: 'TaxonWorks YouTube',
      url: 'https://www.youtube.com/@TaxonWorks/'
    },
    {
      title: 'Species File Group blog',
      url: 'http://speciesfilegroup.org/blog.html'
    }
  ]
}
</script>
