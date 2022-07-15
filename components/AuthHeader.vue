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