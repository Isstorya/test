<template>
  <form>
    <p>First name</p>
    <input type="text" v-model="firstname" :style="firstnameValidationStyle" required>
    
    <p>Last name</p>
    <input type="text" v-model="lastname">
    
    
    <p>Nationality</p>
    <input type="text">
    
    <p>E-mail</p>
    <input type="email">
    
    
    <p>Date of Birth</p>
    <input type="date">
    
    <p>Gender</p>
    <input type="text">
    
    <p>Password</p>
    <input type="password">
    
    <p>Confirm password</p>
    <input type="password">
  </form>
</template>

<script>
import Vue from "vue"
export default {
  data: () => ({
    firstname: "",
    firstnameValidationStyle: {
      color: "black"
    },
    lastname: "",
    lastnameValidation: null,
  }),
  watch: {
    firstname(value){
      this.firstname = value
      this.validateFirstname(value)
    }
  },
  methods: {
    validateFirstname(value){
      if(new RegExp("^[a-zA-Z]{1,}").test(value)) {
        this.firstnameValidationStyle.color = "black"
      } else {
        this.firstnameValidationStyle.color = "red"
      }
    }
  }
}
</script>