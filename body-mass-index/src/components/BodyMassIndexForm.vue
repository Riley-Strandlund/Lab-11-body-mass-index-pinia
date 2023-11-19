<script setup>
  import { useBMIStore } from '../stores/BMIStore.js'
  import { ref } from 'vue'

  const BMICalculationStore = useBMIStore()

  const heightInput = ref('')
  const weightInput = ref('')

  function inputEntered(){
    BMICalculationStore.BMICalculation(heightInput, weightInput)
  }//after button is clicked this function activates connecting it to BMIStore's function to calculate bmi

</script>

<template>
  <div id="BMI-Form">
    <div id="input">
        <label for="Height">Height:</label>
        <input v-model="heightInput" type="number" id="Height" style="margin-left:20px">
        <br>
        <label for="Weight">Weight:</label>
        <input v-model="weightInput" type="number" id="Weight" style="margin-left:15px">
    </div>
    <button v-on:click="inputEntered">Calculate</button>
  </div>
</template>


<style scoped>
    #input{
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 50px;
    }
</style>