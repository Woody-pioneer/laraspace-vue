<template>
  <div class="container">
    <nav id="top">
      <FrontHeader>Header</FrontHeader>
    </nav>
    <slot name="content"/>
    <footer>
      <FrontFooter>Footer</FrontFooter>
    </footer>
  </div>
</template>
<script>
import FrontHeader from './partials/FrontHeader'
import FrontFooter from './partials/FrontFooter'
export default {
  name: 'FrontLayout',
  components: {FrontFooter, FrontHeader}
}
</script>

<style scoped>

</style>
