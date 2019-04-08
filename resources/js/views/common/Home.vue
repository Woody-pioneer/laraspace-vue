<template>
  <div>
    <FrontLayout>
      <div slot="content" class="container">
        <product/>
      </div>
    </FrontLayout>
  </div>
</template>

<script>
import FrontLayout from '../frontend_layouts/FrontLayout'
import Product from '../product/Product'
export default {
  name: 'Home',
  components: {Product, FrontLayout}
}
</script>

<style scoped>

</style>
