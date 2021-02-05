<template>
  <div class="loading-page">
    <img :src="gif" />
  </div>
</template>

<script>
export default {
  props: {
    gif: String,
  },
};
</script>

<style scoped>
.loading-page {
  width: 100%;
  text-align: center;
  font-family: sans-serif;
}

img {
  height: 100%;
  width: 100%;
}
</style>

