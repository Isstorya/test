<template>
  <div class="signUpComponent">
    <h1>New user?</h1>
    <h2>Use the form below to create your account.</h2>
    <SignUpForm @changeMode="$emit('changeMode')" @sendForm="sendForm"/>
  </div>
</template>

<script>
import Vue from "vue"
import SignUpForm from "./SignUpForm.vue"

export default {
  data: () => ({}),
  components: { SignUpForm },
  methods: {
    sendForm(value) {
      this.$emit("sendForm", value)
    }
  }
}
</script>