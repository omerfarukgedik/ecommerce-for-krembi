<template>
    <header>
        <nuxt-link to="/">
            <img class="mt-2 mt-lg-5" alt="krembi-logo" src="~/assets/images/logo.png" />
        </nuxt-link>
        <CategoryList :categories="categories" />
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryList from '@/components/CategoryList.vue';

export default {
    components: { CategoryList },
    computed: {
    ...mapGetters({
      categories: 'categories/getCategories',
    })
  },
}
</script>

<style scoped>
    header {
        background: #f8f1f1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px dashed #ddd;
    }

    header img {
        height: 32px;
        width: 137px;
    }
</style>