<template>
  <div>The message is: {{ message }} {{ t }}</div>
</template>

<script>
export default {
  data () {
    return {
      t: 0,
    }
  },
  props: {
    message: String,
  },
  created () {
    console.log('Created!')
    this.t = 1
  }
}
</script>

<style>
</style>