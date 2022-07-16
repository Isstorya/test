<template>
  <div>
    <form>
      <p>
        <p>E-mail</p>
        <input name="email" type="email" v-model="email" :style="emailValidationStyle">
      </p>
      <p>
        <p>Password</p>
        <input name="password" type="password" v-model="password" :style="passwordValidationStyle">
      </p>
    </form>
    <input type="button" @click="$emit('changeMode')" value="SignUp">
  <input type="button" @click="sendForm" value="Login">
  </div>
</template>

<script>
import Vue from "vue"

export default {
  data: () => ({
    email: "alice.miller@yahoo.com",
    emailValidationStyle: {
      color: "black"
    },
    password: "Password1",
    passwordValidationStyle: {
      color: "black"
    }
  }),
  watch: {
    email(value){
      this.email = value
      this.validateEmail(value)
    },
    password(value){
      this.password = value
      this.validatePassword(value)
    }
  },
  methods: {
    validateEmail(value) {
      if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/g.test(value)) {
        this.emailValidationStyle.color = "black"
      } else {
        this.emailValidationStyle.color = "red"
      }
    },
    validatePassword(value) {
      if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(value)) {
        this.passwordValidationStyle.color = "black"
      } else {
        this.passwordValidationStyle.color = "red"
      }
    },
    sendForm() {
      this.$emit("sendForm", {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>