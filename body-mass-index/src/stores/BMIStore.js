import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBMIStore = defineStore('bodymassindex', () => {
     
    const bmi = ref()

    function BMICalculation(heightInput, weightInput){
        const height = heightInput.value//set variable equal to value of heightInput
        const weight = weightInput.value//set variable equal to value of weightInput
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


