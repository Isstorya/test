<template>
  <div class="container">
    <MainHeader />
    <SignUpComponent />
    <LoginComponent />
  </div>
</template>

<script>
import Vue from "vue"
import MainHeader from "../components/MainHeader.vue"
import SignUpComponent from "../components/auth/SignUpComponent.vue"
import LoginComponent from "../components/auth/LoginComponent.vue"

export default {
  data: () => ({}),
  components: {
    MainHeader,
    SignUpComponent,
    LoginComponent
  }
}

</script>