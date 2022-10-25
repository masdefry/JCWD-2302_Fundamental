// String
// // 1. Length
// let text = "abcdefg"
// console.log(text.length)
// // 2. Slice ---> Mengambil karakter dimulai dari 0 - 4 (4 tidak ikut)
// console.log(text.slice(0, 4))
// console.log(text.slice(4, 0))
// // 3. Substring
// console.log(text.substring(5, 0))
// // 4. Replace
// console.log(text.replace('a', 'aaa'))
// // 5. toUpper & toLower
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// // 6. Concate ---> Menggabungkan 2 variable yang memiliki tipe data string
// let text1 = "Hello"
// let text2 = "World!"
// let text3 = text1.concat(` ${text2}`)
// console.log(text3)
// // 7. IndexOf ---> Mencari posisi index dari suatu karakter
// console.log(text.indexOf('c'))

// // Case1. Ingin merubah 1 huruf menjadi uppercase
// // Step1. Kita ambil 1 huruf yang diinginkan
// let newChar = text.slice(0, 1)
// // Step2. Huruf yang diambil kita ubah menjadi uppercase
// let newCharToUppercase = newChar.toUpperCase()
// console.log(text)

// Number
// 1. toString ---> Merubah number menjadi string
let number = 123
console.log(number)
console.log(number.toString())

// Case1. Untuk mengambil angka ke-2 dari var number
// Step1. Kita ubah menjadi string
let numberToString = number.toString() // "123"
// Step2. Kita ambil karakter ke-2 nya menggunakan method slice
let char2OfNumber = numberToString.slice(1, 2) // "2"
console.log(char2OfNumber)

let number1 = "abc123123"
console.log(Number(number1)) // Strict
console.log(parseInt(number1)) // Menyeleksi