<template>
  <b-nav-item-dropdown text="Currency">
    <template slot="button-content">{{ currency.code }}</template>
    <b-dropdown-item v-for="curr in currencies" v-if="currency.id != curr.id" :key="curr.id" @click="changeCurrency(curr.id)">{{ curr.code }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Currency',
  data () {
    return {
      currencies: null
    }
  },
  computed: {
    ...mapGetters({
      currency: 'Currency/currency'
    })
  },
  async created () {
    const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/currencies`)
    this.currencies = response.data.data
  },
  methods: {
    changeCurrency: function (cur) {
      this.$emit('change-currency', cur)
    }
  }
}
</script>

<style scoped>

</style>
