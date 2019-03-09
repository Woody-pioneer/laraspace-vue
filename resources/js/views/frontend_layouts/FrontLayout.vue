<template>
  <div>
    <FrontTop></FrontTop>
    <FrontHeader>Header</FrontHeader>
    <slot name="content"/>
    <footer>
      <FrontFooter>Footer</FrontFooter>
    </footer>
  </div>
</template>
<script>
import FrontHeader from './partials/FrontHeader'
import FrontFooter from './partials/FrontFooter'
import FrontTop from "./partials/FrontTop";
export default {
  name: 'FrontLayout',
  components: {FrontTop, FrontFooter, FrontHeader}
}
</script>

<style scoped>

</style>
