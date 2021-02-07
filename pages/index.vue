<template>
  <div>
    <div class="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between align-items-lg-center">
      <h1 class="m-0 mb-1"> Products </h1>

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

    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: { ProductList },
  data() {
    return {
      products: [],
      totalRow: 0,
    }
  },
  methods: {
    async getProducts() {
      await this.$axios.get(`/products`).then(res => {
        this.products = res.data.data
        this.totalRow = res.data.meta.pagination.total;
      });
    },
    async pageChange(pInfo) {
      await this.$axios.get(`/products?page=${pInfo.pageNumber}`).then(res => {
        this.products = res.data.data
      });
    }
  },
  async mounted() {
    await this.getProducts();    
  }
}

</script>