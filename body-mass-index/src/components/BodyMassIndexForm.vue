<script setup>

import { ref } from 'vue'

const emit = defineEmits(['stats-entered'])

const height = ref('')
const weight = ref('')

const calculateBMI = () => {
    emit('stats-entered', height.value, weight.value)
}
</script>

<template>
  <div id="BMI-Form">
    <div id="input">
        <label for="Height">Height:</label>
        <input v-model="height" type="number" id="Height" style="margin-left:20px">
        <br>
        <label for="Weight">Weight:</label>
        <input v-model="weight" type="number" id="Weight" style="margin-left:15px">
    </div>
    <button v-on:click="calculateBMI">Calculate</button>
  </div>
</template>


<style scoped>
    #input{
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 50px;
    }
</style>