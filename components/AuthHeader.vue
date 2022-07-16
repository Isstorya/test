<template>
  <header>{{ title }}</header>
</template>

<script>
import Vue from "vue"

export default {
  props:{
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({})
}
</script>

<style>
header {
  background-color: #5a61e5;
  width: 100vw;
}
</style>