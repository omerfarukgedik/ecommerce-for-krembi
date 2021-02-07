<template>
    <nuxt-link :to="'/product/' + prod.id ">
        <div class="card d-flex flex-column">
            <img :alt="prod.name" :src="prod.image" />
            <div class="p-1 p-lg-2 d-flex flex-column">
                <h2>{{prod.name}}</h2>

                <div class="d-flex justify-content-between">
                    <span class="discount">$ {{ prod.discount_amount }}</span>
                    <span class="price">$ {{ prod.price }}</span>
                </div>

                <div class="d-flex flex-wrap justify-content-center pt-3">
                    <div class="category-item" v-for="(category, index) in prod.categories" :key="index">
                        {{ category.name }}
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        prod: Object
    },
    
}
</script>

<style scoped>
    img {
        object-fit: cover;
        height: 200px;
        border-radius: 10px 10px 0px 0px;

    }
    .card {
        border: 1px solid #e1d89f;
        border-radius: 10px;
    }

    .discount {
        text-decoration:line-through
    }

    .price {
        color: #42DEDA;
        font-size: 1.2rem;
    }

    .category-item {
        background: #F8F1F1;
        padding: .3rem .3rem;
        margin: .2rem .1rem;
        font-size: .8rem;
        color: #2c061f;
        border-radius: 10px;
    }

    h2 {  }

    @media (max-width: 991px) {
        .price {
            font-size: .9rem;
        }
        img {
            height: 100px;
        }
        .category-item {
            font-size: .6rem;
            padding: .1rem;
            margin: .1rem;
        }
    }
</style>