import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBMIStore = defineStore('bodymassindex', () => {
     
    const bmi = ref()

    function BMICalculation(heightInput, weightInput){
        const height = parseFloat(heightInput.value)
        const weight = parseFloat(weightInput.value)
        bmi.value = (weight / (height * height)).toFixed(2)
    }//takes two parameters to find the bmi value

    return{
        //reactive data
        bmi,
        //functions
        BMICalculation
        //computed properties
    }
})


