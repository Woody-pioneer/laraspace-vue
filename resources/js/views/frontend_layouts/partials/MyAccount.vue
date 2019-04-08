<template>
  <b-nav-item-dropdown right>
    <!-- Using button-content slot -->
    <template slot="button-content"><i class="icon-fa icon-fa-user"/><em> {{ user ? user.name:'My Account' }}</em></template>
    <div v-if="!user">
      <b-dropdown-item href="/login">Login</b-dropdown-item>
      <b-dropdown-item href="/register">Register</b-dropdown-item>
    </div>
    <div v-else>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item @click="logout">Logout</b-dropdown-item>
    </div>
  </b-nav-item-dropdown>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'MyAccount',
  computed: {
    ...mapGetters({
      user: 'Auth/user'
    })
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>

</style>
