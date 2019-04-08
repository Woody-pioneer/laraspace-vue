<template>
  <b-nav-item-dropdown left>
    <!-- Using button-content slot -->
    <template slot="button-content">{{ language.name }}</template>
    <template slot="button-content"/>
    <b-dropdown-item v-for="lan in languages" v-if="lan.id != language.id " :key="lan.id" @click="changeLang(lan.id)"><b-img :src="'/images/flags/'+lan.image"/>  {{ lan.name }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Language',
  data: function () {
    return {
      languages: []
    }
  },
  computed: {
    ...mapGetters({
      language: 'Language/language'
    })
  },

  async created () {
    const response = await axios.get(`http://opbasicservice.bonnetech.net/api/v1/languages`)
    this.languages = response.data.data
  },
  methods: {
    changeLang: function (lang) {
      this.$emit('change-lang', lang)
    }
  }
}

</script>

<style scoped>

</style>
