<template>
  <div id="cart">
    <button type="button" data-toggle="dropdown" data-loading-text="" class="btn btn-info btn-block btn-lg dropdown-toggle"><i class="fas fa-shopping-cart"/> <span id="cart-total">Items</span></button>

    <ul class="dropdown-menu dropdown-menu-right">
      <li>
        <p class="text-center">No Results</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped>

</style>
