<template>
  <form @submit.prevent="validateBeforeSubmit">
    <button class="btn btn-login btn-full">Register</button>
  </form>
</template>
<script type="text/babel">

import {required, minLength, email, sameAs} from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data () {
    return {
      registerData: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  validations: {
    registerData: {
      password: {
        required,
        minLength: minLength(6)
      },
      password_confirmation: {
        sameAsPassword: sameAs('password')
      },
      email: {
        required,
        email,
        async isUnique (value) {
          // standalone validator ideally should not assume a field is required
          if (value === '') return true

          // simulate async call, fail for all logins with even length
          let response = await window.axios.post('/api/email-exist', { email: value })
          return response.data
        }
      }
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$v.$touch()
      if (!this.$v.$error) {
        alert('Regitered success')
      }
    }
  }
}
</script>
