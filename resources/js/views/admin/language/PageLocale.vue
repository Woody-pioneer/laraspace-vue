<template>
  <div>
    <transition name="fade">
      <BaseLoading
        v-if="loading"
        key="loading"
        class="overlay"
      />
      <div v-else>
        <h1 class="text-center">{{ $t('change-lang') }}</h1>
        <div class="row">
          <div class="col-md-12 text-center">
            <div
              v-for="lang of langs"
              :key="lang"
              class="locale-lang"
            >
              <b-btn variant="outline-primary"
                :class="{ selected: lang === $i18n.locale }"
                @click="setLocale(lang)"
              >
                {{ $t(`lang.${lang}`) }}
              </b-btn>
            </div>
            <div class="locale-lang">
            <b-btn variant="outline-danger"
                   @click="goBack"
            >
              {{ $t('back') }}
            </b-btn>
          </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import langs from '../../../i18n'
import BaseLoading from "../components/BaseLoading";

export default {
  components: {BaseLoading},
  data () {
    return {
      langs,
      loading: false,
    }
  },

  methods: {
    goBack () {
      this.$router.back()
    },

    async setLocale (locale) {
      this.loading = true
      if (!this.$i18n.messages[locale]) {
        const { default: messages } = await import(`../../../i18n/locales/${locale}`)
        this.$i18n.setLocaleMessage(locale, messages)
      }
      this.$i18n.locale = locale
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
  .locale-lang {
    padding: 2px;
    text-align: center;
    margin: auto;
    display: inline-flex;
}
</style>
