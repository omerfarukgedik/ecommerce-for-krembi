<template>
  <main>
    <Header />
    <div class="container py-4 py-lg-5">
      <Nuxt />
    </div>

  </main>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';

export default {
  components: { 
    Header,
  },
}
</script>