<template>
    <div>
        <div class="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between align-items-center">
            <div class="head mb-3">
                <h1 class="m-0 mb-1"> {{ cat.name }}</h1>
                <span> {{ cat.description }}</span>
            </div>

            <client-only>
                <v-page 
                :border="false" 
                :total-row="totalRow" 
                :page-size-menu="[20]"
                language="en" 
                @page-change="pageChange">
                </v-page>
            </client-only>
        </div>
        
        <ProductList :products="prods" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList';
export default {
    components: { ProductList },
    props: {
        cat: Object,
        prods: Array,
        totalRow: Number,
        pageChange: Function
    },
}
</script>

<style scoped>
    img {
        object-fit: cover;
        width: 700px;
        border-radius: 10px 0px 0px 10px;
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
        img { width: 100% ;}
        .price {
            font-size: .9rem;
        }
        .category-item {
            font-size: .6rem;
            padding: .1rem;
            margin: .1rem;
        }
    }
</style>