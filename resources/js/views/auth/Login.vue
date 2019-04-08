<template>
  <div>
    <FrontLayout>
      <div slot="content" class="container">
        <div class="login-page login-2">
          <div class="login-wrapper">
            <div class="login-box">
              <form @submit.prevent="validateBeforeSubmit">
                <div :class="['form-group', {'is-invalid': $v.loginData.email.$error}]">
                  <input
                    :class="{ 'is-invalid': $v.loginData.email.$error }"
                    v-model.trim="loginData.email"
                    class="form-control"
                    placeholder="Enter Email"
                    type="email"
                    @input="$v.loginData.email.$touch()"
                  >
                  <span v-if="!$v.loginData.email.required" class="invalid-feedback">
                    Email is required
                  </span>
                  <span v-if="!$v.loginData.email.email" class="invalid-feedback">
                    Email is invalid
                  </span>
                </div>
                <div :class="['form-group', {'is-invalid': $v.loginData.password.$error}]">
                  <input
                    :class="{ 'is-invalid': $v.loginData.password.$error }"
                    v-model.trim="loginData.password"
                    class="form-control"
                    placeholder="Enter Password"
                    type="password"
                    @input="$v.loginData.password.$touch()"
                  >
                  <span v-if="!$v.loginData.password.required" class="invalid-feedback">
                    Password is required
                  </span>
                  <span v-if="!$v.loginData.password.minLength" class="invalid-feedback">
                    Password must have at least {{ $v.loginData.password.$params.minLength.min }} letters.
                  </span>
                </div>
                <div class="other-actions row">
                  <div class="col-sm-6">
                    <div class="checkbox">
                      <label class="c-input c-checkbox">
                        <input
                          v-model="loginData.remember"
                          type="checkbox"
                          name="remember"
                        >
                        <span class="c-indicator"/>
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6 text-sm-right">
                    <a href="#" class="forgot-link">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button class="btn btn-theme btn-full">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FrontLayout>
  </div>
</template>

<script type="text/babel">
import {required, minLength, email} from 'vuelidate/lib/validators'
import FrontLayout from '../frontend_layouts/FrontLayout'
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  components: {FrontLayout},
  data () {
    return {
      loginData: {
        email: 'admin@laraspace.in',
        password: 'admin@123',
        remember: ''
      }
    }
  },
  validations: {
    loginData: {
      password: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),
    validateBeforeSubmit () {
      if (!this.$v.$error) {
        this.login(this.loginData).then((res) => {
          console.log(res)
          if (res) {
            //this.$router.back()

          }
        })
      }
    }
  }
}
</script>
