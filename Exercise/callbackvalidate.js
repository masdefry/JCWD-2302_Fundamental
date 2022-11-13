// Indirect Callback
function Validation(email, cb){
    if(email.includes("@")){
        return cb(true)
    }else{
        return cb(false)
    }
}

function Result(emailFromValidation){
    return emailFromValidation
}

console.log(Validation("ryan@gmail.com", Result))

// Direct Callback
let Validation1 = (email, cb) => {
    if(email.includes("@")){
        return cb(true)
    }else{
        return cb(false)
    }
}

let resultValidation1 = Validation1("muhammad@gmail.com", (emailFromValidation) => {
    return emailFromValidation
})
console.log(resultValidation1)