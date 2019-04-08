<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-4">
          <div id="logo">
            <h1><a href="/">{{ $t('home') }}</a></h1>
              </div>
        </div>
        <div class="col-md-5">
          <Search/>
        </div>
        <div class="col-md-4 col-lg-3">
          <Cart/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from './Search'
import Cart from './Cart'
export default {
  name: 'FrontHeader',
  components: {Cart, Search}
}
</script>

<style scoped>

</style>
