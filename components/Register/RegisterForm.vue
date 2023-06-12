<template>
  <VModal>
    <div class="md:m-8 md:h-[600px] h-screen w-screen md:w-[500px]">
      <iframe
        class="bg-white h-full rounded-lg w-full"
        :src="data.registration_form"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading...
      </iframe>
    </div>
  </VModal>
</template>

<script setup>
const { data } = await useAsyncData('event', () =>
  queryContent('/event').findOne()
)
</script>
