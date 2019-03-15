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
import FrontTop from './partials/FrontTop'
import Language from './partials/Language'
import Currency from './partials/Currency'
export default {
  name: 'FrontLayout',
  components: {Currency, Language, FrontTop, FrontFooter, FrontHeader}
}
</script>

<style scoped>

</style>
