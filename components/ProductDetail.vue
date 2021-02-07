<template>
    <div class="d-flex flex-column flex-lg-row ">
        <img :alt="prod.name" :src="prod.image" />
        <div class="content pl-lg-4 d-flex  flex-column align-items-lg-end">
            <h2>{{prod.name}}</h2>
            <span>{{prod.description}}</span>
            
            <div class="d-flex flex-row flex-lg-column justify-content-between mt-4">
            <span class="discount">$ {{ prod.discount_amount }}</span>
            <span class="price">$ {{ prod.price }}</span>
            </div>

            <div class="d-flex flex-wrap justify-content-center pt-3">
                <div v-for="(category, index) in prod.categories" :key="index">
                    <nuxt-link :to="'/category/' + category.id">
                        <div class="category-item" >{{ category.name }}</div> 
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
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
        width: 700px;
        border-radius: 10px 0px 10px 0px;
    }

    span {
        text-align: right;
    }

    .content {
        width: 100%;
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

    @media (max-width: 991px) {
        img { 
            width: 100%;
        }
        .price {
            font-size: .9rem;
        }
        .category-item {
            font-size: .6rem;
            padding: .1rem;
            margin: .1rem;
        }
        span {
            text-align: left;
        }
    }
</style>