<template>
  <b-nav-item-dropdown left>
    <!-- Using button-content slot -->
    <template slot="button-content"><b-img :src="'/images/flags/'+locale.avatar"/></template>
    <b-dropdown-item v-for="language in languages" v-if="language.id!=locale.id" :key="language.id" @click="changeLang(language.id)"><b-img :src="'/images/flags/'+language.avatar"/>  {{ language.name }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Language',
  data: function () {
    return {
      languages: [
        {
          id: 1,
          name: 'English',
          code: 'en',
          avatar: 'ca.png'
        },
        {
          id: 2,
          name: 'French',
          code: 'fr',
          avatar: 'fr.png'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['locale'])
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
