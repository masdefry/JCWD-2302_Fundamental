let fizzBuzz = (n) => {
    let arr = []
    for(let i=1; i <= n; i++){ // 1 <= 16? True ... 3 <= 16? True
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz")
        }else if(i % 5 === 0){
            arr.push("Buzz")
        }else if(i % 3 === 0){
            arr.push("Fizz")
        }else{
            arr.push(i)
        }
    }

    return arr
}

// // ############################################################
// // Case. Buatlah program untuk menjumlahkan setiap angka kelipatan 3 ataupun 5 ke dalam sebuah variable
// // Ex.  n-looping = 10 ---> output = 3 + 5 + 6 + 9 + 10 = ...
// //      n-looping = 4  ---> output = 3
// let addNum = (n) => {
//     let total = 0

//     for(let i=1; i <= n; i++){ 
//         if(i % 3 === 0){ 
//             total += i 
//         }else if(i % 5 === 0){
//             total += i
//         }
//     }

//     return total
// }

// console.log(addNum(16))



module.exports = fizzBuzz