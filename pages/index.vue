<template>
  <div class="container">
    <AuthHeader :title="headerTitle" />
    <SignUpComponent v-if="!loginMode" />
    <LoginComponent v-else />
    <input type="button" v-model="changeModeBtnTitle" @click="changeMode">
    <input type="button" value="SignUp" @click="sendForm">
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
        this.changeModeBtnTitle = "SignUp"
      } else {
        this.headerTitle = "SignUp"
        this.loginMode = false
        this.changeModeBtnTitle = "Login"
      }
    },
    sendForm() {
      console.log("send")
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