<template>
  <v-container>
    <v-row class="font-weight-bold">
      <v-col :cols="1">#</v-col>
      <v-col :cols="4">Date</v-col>
      <v-col :cols="5">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row v-for="pay, index in getPaymentsList" :key="index">
      <v-col :cols="1">{{ index }}</v-col>
      <v-col :cols="4">{{ pay.date }}</v-col>
      <v-col :cols="5">{{ pay.type }}</v-col>
      <v-col :cols="2">{{ pay.amount }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>

</style>