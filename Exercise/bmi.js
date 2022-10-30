function Bmi(weight, height){
    // Step1. Cari rumus
    let bmi = weight / Math.pow((height/100), 2)

    if(bmi < 18.5){
        return "Less Weight"
    }else if(bmi < 24.9){
        return "Ideal"
    }else if(bmi < 29.9){
        return "Overweight"
    }else if(bmi < 39.9){
        return "Very Overweight"
    }else if(bmi >= 39.9){
        return "Obesitas"
    }
}

console.log(Bmi(70, 150))