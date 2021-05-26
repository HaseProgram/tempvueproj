<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <template v-slot:activator="{on}">
      <v-btn color="teal" dark v-on="on">
        ADD NEW COST <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card class="text-left pa-8">
      <v-text-field label="Date" v-model="date"></v-text-field>
      <v-select :items="cats" v-model="category" label="Category"></v-select>
      <v-text-field v-model.number="amount" label="Value"></v-text-field>
      <v-btn @click="onAddClick">Add</v-btn>
      <v-btn @click="dialog=false">Close</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      date: '',
      category: '',
      amount: 0,
      cats: ['Food', 'Transport', 'Housing', 'Healthcare'],
    }
  },
  methods: {
    ...mapActions([
      'addInList'
    ]),
    onAddClick () {
      this.addInList({
        date: this.date,
        type: this.category,
        amount: this.amount
      })
      this.dialog = false
    }
  },
  mounted () {
    this.date = new Date().toISOString().split('T')[0]
  }
}
</script>

<style>

</style>