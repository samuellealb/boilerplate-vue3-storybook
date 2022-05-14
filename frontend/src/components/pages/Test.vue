<template>

  <div class="aa-test">

    <div class="funds-card">
      <h1>Available funds: {{availableFunds}}</h1>
      <h2>Total expenses: {{totalExpenses}}</h2>
      <h2 class="remaining-funds">Remaning funds: {{remainingFunds}}</h2>
      <input placeholder="Insert expense" v-model="newExpense">
      <button @click="addExpense">Add expense</button>
    </div>

</div>

</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {    
    const availableFunds = ref(1000);
    const totalExpenses = ref(0);
    const newExpense = ref('');
    const remainingFunds = computed(function() {
      return availableFunds.value - totalExpenses.value
    });
    function addExpense () {
      totalExpenses.value = totalExpenses.value + +newExpense.value
    }

    watch(remainingFunds, function(newValue) {
      const fundsText = document.getElementsByClassName('remaining-funds')
      if (newValue < 0) {
        fundsText[0].classList.add('red');
      } else {
        fundsText[0].classList.remove('red');
      }
    })

    return {
      availableFunds,
      totalExpenses,
      remainingFunds,
      newExpense,
      addExpense,
    }
  },
}
</script>

<style>
  .aa-test .funds-card {
    border-radius: .5px;
    box-shadow: 0 0 1rem .15rem lightgray;
    padding: 3rem;
    margin: 50px auto;
    width: 50%;
  }
</style>