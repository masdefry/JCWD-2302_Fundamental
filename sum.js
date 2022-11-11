function Sum(num1, num2){
    return num1 + num2
}

function Validate(email){
    if(email.includes("@")){
        return true 
    }

    return false
}

module.exports = {Sum, Validate}