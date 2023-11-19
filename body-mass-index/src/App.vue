<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { useBMIStore } from './stores/BMIStore';
import { storeToRefs } from 'pinia';

const BMICalculationStore = useBMIStore()
const { bmi } = storeToRefs(BMICalculationStore)//Grabs bmi value to display

</script>

<template>
  <div id="app-component">
    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm></BodyMassIndexForm>
    <!--The above connects to the child component to receive the data and send data if necessary.
    When the event 'stats-entered' is emitted it sends the data to BMICalculation function to get BMI-->

    <div id="bmi-style">
      BMI is: {{ bmi }}<!--Display's bmi-->
    </div>
  </div>
</template>


<style scoped>
  #app-component{
    background-color: bisque;
    padding: 5%;
    overflow: hidden;
    color: rgb(134, 81, 0);
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: black;
  }
  #bmi-style {
    padding-top: 2%;
    font-size: 20px;
    font-weight: 1000;
      }
</style>