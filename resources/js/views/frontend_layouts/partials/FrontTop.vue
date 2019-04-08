<template>
  <div id="top">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <Language @change-lang="changLan"/>
          <Currency @change-currency="changCur"/>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><i class="icon-fa icon-fa-phone"/>123456789</b-nav-item>
          <my-account/>
          <b-nav-item href="#"><i class="icon-fa icon-fa-heart"/>Wish List(0)</b-nav-item>
          <b-nav-item href="#"><i class="icon-fa icon-fa-shopping-basket"/>Shopping Cart</b-nav-item>
          <b-nav-item href="#"><i class="icon-fa icon-fa-refresh"/>Checkout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Language from './Language'
import Currency from './Currency'
import {mapActions} from 'vuex'
import MyAccount from './MyAccount'
export default {
  name: 'FrontTop',
  components: {MyAccount, Currency, Language},
  methods: {
    ...mapActions({
      changLan: 'Language/changeLanguage',
      changCur: 'Currency/changeCurrency'
    }),
  }
}
</script>

<style scoped>

</style>
