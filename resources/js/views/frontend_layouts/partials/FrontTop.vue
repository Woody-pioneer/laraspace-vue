<template>
  <div id="top">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <Language></Language>
          <Currency></Currency>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><i class="icon-fa icon-fa-phone"/>123456789</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><i class="icon-fa icon-fa-user"/><em>My Account</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#"><i class="icon-fa icon-fa-heart"/>Wish List(0)</b-nav-item>
          <b-nav-item href="#"><i class="icon-fa icon-fa-shopping-basket"/>Shopping Cart</b-nav-item>
          <b-nav-item href="#"><i class="icon-fa icon-fa-refresh"/>Checkout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Language from "./Language";
import Currency from "./Currency";
export default {
  name: 'FrontTop',
  components: {Currency, Language}
}
</script>

<style scoped>

</style>
