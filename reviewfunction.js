// Function
// Sebuah wadah yang terisolasi yang berisikan baris program di dalamnya

// - Function Declaration
function A(){
    // Block Of code
}

// - Function Expression
let B = function(){
    // Block of code
}

// - Arrow Function
let C = () => {
    // Block of code
}



// Function with Parameter
let MyFunc = (num1, num2) => {
    console.log(num1, num2)
}

MyFunc(2, 5)

// Function with Return
let NewFunct = (sapa) => {
    console.log(sapa)
}

NewFunct("Hello, JCWD!")
let resultNewFunct = NewFunct("Hello, JCWD!")
console.log(resultNewFunct)

let OurFunct = (sapa) => { // sapa ---> disimpan kedalam function OurFunct
    return sapa 
}
let resultOurFunct = OurFunct("Hello, Purwadhika") + "!"
let result1 = OurFunct(20) + 20
console.log(resultOurFunct)
console.log(result1)



// Callback Function
// Function yang dijadikan argument oleh function lain
// 1. Indirect
let Output = (dataFromPenjumlahan) =>{
    return dataFromPenjumlahan
}

let Penjumlahan = (num1, num2, cb) => { // 5--->num1, 10--->num2, Output--->cb
    let result = num1 + num2 // 5 + 10 = 15
    return cb(result) // return Output(15)
}

Penjumlahan(5, 10, Output)



let arr = [1, 2, 3]
arr.forEach((value, index) => {
    console.log(value)
})

// 2. Direct
let Penjumlahan1 = (num1, num2, cb) => { // 5--->num1, 10--->num2, Output--->cb
    let result = num1 + num2 // 5 + 10 = 15
    return cb(result) // return Output(15)
}

Penjumlahan1(5, 10, (dataFromPenjumlahan) =>{
    return dataFromPenjumlahan
})