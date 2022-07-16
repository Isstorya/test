<template>
  <div class="loginComponent">
    <h1>Have account?</h1>
    <h2>Use the form below to login your account.</h2>
    <LoginForm @changeMode="$emit('changeMode')" @sendForm="sendForm" />
  </div>
</template>

<script>
import Vue from "vue"
import LoginForm from "./LoginForm.vue"

export default {
  data: () => ({}),
  components: { LoginForm },
  methods: {
    sendForm(value) {
      this.$emit("sendLoginForm", value)
    }
  }
}
</script>