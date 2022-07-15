<template>
  <div class="signUpComponent">
    <h1>New user?</h1>
    <h2>Use the form below to create your account.</h2>
    <SignUpForm />
  </div>
</template>

<script>
import Vue from "vue"
import SignUpForm from "./SignUpForm.vue"

export default {
  data: () => ({}),
  components: { SignUpForm },
  methods: {}
}
</script>