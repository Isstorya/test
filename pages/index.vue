<template>
  <div class="container">
    <AuthHeader :title="headerTitle" />
    <SignUpComponent v-if="!loginMode" @changeMode="changeMode" @sendForm="sendForm"/>
    <LoginComponent v-else />
  </div>
</template>

<script>
import Vue from "vue"
import AuthHeader from "../components/AuthHeader.vue"
import SignUpComponent from "../components/auth/SignUpComponent.vue"
import LoginComponent from "../components/auth/LoginComponent.vue"

export default {
  data: () => ({
    headerTitle: "SignUp",
    loginMode: false,
    changeModeBtnTitle: "Login"
  }),
  components: {
    AuthHeader,
    SignUpComponent,
    LoginComponent
  },
  methods: {
    changeMode() {
      if (!this.loginMode) {
        this.headerTitle = "Login"
        this.loginMode = true
      } else {
        this.headerTitle = "SignUp"
        this.loginMode = false
      }
    },
    sendForm(value) {
      this.$store.dispatch("setEmail", value.email)
      console.log(this.$store.state.email)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>