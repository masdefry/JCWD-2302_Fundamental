// Logical Operator
// OR ||
// 1. Apabila salah satu kondisi bernilai true, maka hasil akhir akan true
// 2. Apabila ingin kondisi akhir bernilai false, maka kedua kondisi harus sama-sama false
console.log(false || false)
console.log(10<100 || 100 > 10) // true || true
console.log(13<12 || 100>1000 || 1000<99 || 1>100)

// AND &&
// 1. Apabila salah satu kondisi bernilai false, maka hasil akhir akan false
// 2. Apabila ingin kondisi akhir bernilai true, maka kedua nya harus sama-sama true
console.log(10<100 && 1000==="1000") // true && false

// NOT !
// Kebalikan 
console.log(!(10<100 && 1000==="1000")) // true && false ---> !false ---> true

