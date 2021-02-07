<template>
  <CategoryDetail :totalRow="totalRow" :pageChange="pageChange" :cat="category" :prods="products" />
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryDetail from '@/components/CategoryDetail'

export default {
  data() {
    return {
      products: null,
      totalRow: 0
    }
  },
  components: { CategoryDetail },
  computed: {
    ...mapGetters({
      getCategory: 'categories/getCategory',
    }),
    category() {
      return this.getCategory(this.$route.params.id);
    },
    
  },
  methods: {
    async getProducts() {
      const data = []

      await this.$axios.get(`/product-categories?category_id=${this.$route.params.id}`).then(res => {
        this.totalRow = res.data.meta.pagination.total;
        for(const item of res.data.data) {
          this.$axios.get(`/products?id=${item.product_id}`).then(res => {
            data.push(res.data.data[0]);
          })
        }
      })
      this.products = data
    },
    async pageChange(pInfo) {
      const data = [];

      await this.$axios.get(`/product-categories?category_id=${this.$route.params.id}&page=${pInfo.pageNumber}`).then(res => {
        for(const item of res.data.data) {
          this.$axios.get(`/products?id=${item.product_id}`).then(res => {
            data.push(res.data.data[0]);
          })
        }
      });

      this.products = data
    }
  },
  mounted() {
    this.getProducts();    
  }
}
</script>
