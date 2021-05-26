<template>
  <v-container class="text-left">
    <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
    <v-row>
      <v-col>
        <AddPaymentForm />
        <PaymentsDisplay />
      </v-col>
      <v-col>
        <!-- <Diagram /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from './PaymentsDisplay'
import AddPaymentForm from './AddPaymentForm'
export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  }
}
</script>

<style>

</style>