// Case. Kita memiliki sebuah function penjumlahan, 
// kemudian hasilnya kita tampilkan di dalam function lain.

function Output(bebas){ // 3 ---> bebas
    return bebas * 2 // return 3
}

function Penjumlahan(num1, num2){ // 1 ---> num1, 2 ---> num2
    return num1 + num2 // return 1 + 2 = 3
}
let resultPenjumlahan = Penjumlahan(1, 2) // 3
console.log(Output(resultPenjumlahan))



// Callback Function
// Function yang dijadikan argument oleh function lain
// 1. Indirect Callback
function Output1(data){ // 3 ---> data
    return data * 2 // 3 * 2 = 6
}

function Penjumlahan1(num1, num2, cb){ // 1 ---> num1, 2 ---> num2, Output1 ---> cb
    let result = num1 + num2
    return cb(result) // Output1(3)
}

console.log(Penjumlahan1(1, 2, Output1))



// 2. Direct Callback
function Penjumlahan2(num1, num2, cb){ // 1 ---> num1, 2 ---> num2, Output1 ---> cb
    let result = num1 + num2
    return cb(result) // Output1(3)
}

console.log(Penjumlahan2(1, 2, function Output2(data){ // 3 ---> data
    return data * 2 // 3 * 2 = 6
}))



// ####################################
function Output(hasilKali){ // 50 ---> hasilKali
    return hasilKali // 50 
}

function Perkalian(num1, num2, cb){ // 5 -> num1, 10 -> num2, Output -> cb
    return cb(num1 * num2) // Output(5 * 10) ---> Output(50)
}

Perkalian(5, 10, Output)









