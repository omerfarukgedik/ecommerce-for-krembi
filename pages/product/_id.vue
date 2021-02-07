<template>
  <ProductDetail :prod="product" />
</template>

<script>
import ProductDetail from '@/components/ProductDetail'

export default {
  components: { ProductDetail },
  data() {
    return {
      product: {}
    }
  },
  methods: {
    async getProduct() {
      await this.$axios.get(`/products?id=${this.$route.params.id}`).then(res => {
        this.product = res.data.data[0]
      });

    }
  },
  async mounted() {
    await this.getProduct();    
  }
}
</script>
