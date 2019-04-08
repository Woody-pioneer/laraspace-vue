<template>
  <div>
    <FrontTop/>
    <FrontHeader>Header</FrontHeader>
    <MainMenu></MainMenu>
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
import MainMenu from "./partials/MainMenu";
export default {
  name: 'FrontLayout',
  components: {MainMenu, FrontTop, FrontFooter, FrontHeader}
}
</script>

<style scoped>

</style>
