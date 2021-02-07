<template>
    <div class="row">
        <div class="col-6 col-lg-3 mt-3 px-1 px-lg-3" v-for="(p, index) in products" :key="index">
            <Product :prod="p" />            
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product';

export default {
    props: {
        products: {
            type: Array,
        }
    }
}
</script>

