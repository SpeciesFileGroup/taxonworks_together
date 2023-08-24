<template>
  <footer class="w-full bg-secondary-dark text-white">
    <div class="container p-8 mx-auto flex justify-between">
      <div class="text-lg font-medium">© Species File Group</div>
      <div>
        <div class="mb-2 text-lg font-bold">Social</div>
        <ul>
          <li
            v-for="item in social"
            :key="item.link"
          >
            <a
              class="text-primary"
              :href="item.link"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const social = [
  {
    title: 'TaxonWorks Mastodon',
    link: 'https://fosstodon.org/@TaxonWorks'
  },
  {
    title: 'TaxonWorks YouTube',
    link: 'https://www.youtube.com/@TaxonWorks/'
  },
  {
    title: 'Species File Group blog',
    link: 'http://speciesfilegroup.org/blog.html'
  }
]
</script>
