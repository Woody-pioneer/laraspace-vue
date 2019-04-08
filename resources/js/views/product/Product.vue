<template>
  <div class="row">
    <ProductItem @add-cart="addCart"/>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: 'Product',
  components: {ProductItem},
  methods: {
    addCart: function (pid) {
      let products = this.$store.state.Products.products
      let item = products.find(i => i.id === pid)
      this.$store.dispatch('Cart/addCart', {item: item, quantity: 1, isAdd: true})
    }
  }
}
</script>

<style scoped>

</style>
