<template>
  <main>
    <Header />
    <div class="container py-4 py-lg-5">
      <div class="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between">
        <div class="content py-4 py-lg-0">
          <Nuxt />
        </div>
        <div class="menu pl-lg-2">
          <Menu />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: { 
    Header,
    Menu 
  },
}
</script>

<style>

  div.menu {
    width: 250px;
    border-left: 1px dashed #ddd;
  }
  
  div.content {
    width: 100%;
  }

  @media (max-width: 991px) {
    div.menu {
      border-left: 0px;
      padding-bottom: .5rem;
      border-bottom: 1px dashed #ddd;
      width: 100%;
    }
  }
 
</style>