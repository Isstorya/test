<template>
  <form>
    <p>
      <p>First name</p>
      <input name="firstname" type="text" v-model="firstname" :style="firstnameValidationStyle" required>
    </p>
    <p>
      <p>Last name</p>
      <input name="lastname" type="text" v-model="lastname" :style="lastnameValidationStyle" required>
    </p>
    <p>
      <p>Nationality</p>
      <select v-model="nationality">
        <option disabled value="">Please select one</option>
        <option>American</option>
        <option>Russian</option>
        <option>Chinese</option>
      </select>
    </p>
    <p>
      <p>E-mail</p>
      <input name="email" type="email" v-model="email" :style="emailValidationStyle" required>
    </p>
    <p>
      <p>Date of Birth</p>
      <input name="dateOfBirth" type="date"v-model="dateOfBirth">
    </p>
    <p>
      <p>Gender</p>
      <input name="genderMale" type="radio" value="Male" v-model="gender">
      <label for="genderMale">Male</label>
      <input name="genderFemale" type="radio" value="Female" v-model="gender">
      <label for="genderFemale">Female</label>
    </p>
    <p>
      <p>Password</p>
      <input name="password" type="password" v-model="password" :style="passwordValidationStyle">
    </p>
    <p>
      <p>Confirm password</p>
      <input name="confirmPassword" type="password" v-model="confirmPassword" :style="confirmPasswordValidationStyle">
    </p>
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
    lastnameValidationStyle: {
      color: "black"
    },
    nationality: "",
    email: "",
    emailValidationStyle: {
      color: "black"
    },
    dateOfBirth: "",
    gender: "",
    password: "",
    passwordValidationStyle: {
      color: "black"
    },
    confirmPassword: "",
    confirmPasswordValidationStyle: {
      color: "black"
    }
  }),
  watch: {
    firstname(value){
      this.firstname = value
      this.validateFirstname(value)
    },
    lastname(value){
      this.lastname = value
      this.validateLastname(value)
    },
    email(value){
      this.email = value
      this.validateEmail(value)
    },
    password(value){
      this.password = value
      this.validatePassword(value)
    },
    confirmPassword(value){
      this.confirmPassword = value
      this.validateConfirmPassword(value)
    }
  },
  methods: {
    validateFirstname(value){
      if(new RegExp("^[a-zA-Z]{1,}$").test(value)) {
        this.firstnameValidationStyle.color = "black"
      } else {
        this.firstnameValidationStyle.color = "red"
      }
    },
    validateLastname(value){
      if(new RegExp("^[a-zA-Z]{1,}$").test(value)) {
        this.lastnameValidationStyle.color = "black"
      } else {
        this.lastnameValidationStyle.color = "red"
      }
    },
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
    validateConfirmPassword(value) {
      if(this.password == this.confirmPassword) {
        this.confirmPasswordValidationStyle.color = "black"
      } else {
        this.confirmPasswordValidationStyle.color ="red"
      }
    }
  }
}
</script>