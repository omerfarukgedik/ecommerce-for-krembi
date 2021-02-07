<template>
    <div class="py-2 py-lg-4 container d-flex flex-wrap justify-content-center">
        <nuxt-link class="category-item"  v-for="(c, index) in categories" :key="index" :to="'/category/' + c.id"> 
            {{ c.name }}
        </nuxt-link>
    </div>
</template>

<script>

export default {
    props: {
        categories: {
            type: Array,
        }
    }
}
</script>

<style scoped>
    .category-item {
        margin-right: 10px;
        background: #ddd;
        padding: .3rem .5rem;
        margin-top: 10px;
        border-radius: 5px;
    }

    .category-item:last-child {
        margin-right: 0px;
    }

    @media (max-width: 991px) {
        .category-item {
            font-size: .8rem;
            margin-top: 5px;
            margin-right: 5px;
            padding: .2rem;
        }
        .category-item:last-child {
            margin-right: 0px;
        }
    }
</style>