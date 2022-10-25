console.log("Hello, World!");
console.log("Hello, Purwadhika!")

// Variable Declaration
var makanan // Declare variable
makanan = "Pizza" // Assign value
console.log(makanan)

var hewan = "Ayam" // Declare & Assign secara bersamaan

// var x let x const
// var ---> Diperbolehkan membuat variable dengan nama yg sama
//      ---> Tidak mengenal scope

// let ---> Tidak diperbolehkan membuat variable dengan nama yg sama
//      ---> Mengenal scope

// const ---> Mirip dengan let, hanya saja value nya constant

let makanan1 = "Pizza"
let makanan2 = "KFC"
let makanan3 = "MCD"
// ...
// ...
// ...

// Variable Rules
// 1. Penamaan variable harus spesifik
let namastadion = "Bung Karno"

// 2. Karakter pertama harus huruf, $, _ (underscore)
let _namapahlawan

// 3. Syntax Javascript tidak diperbolehkan dalam penamaannya 

// 4. Apabila nama var lebih dari 1 kata, hanya bisa dihubungkan dengan _ atau menggunakan camelCase
// 5. Case sensitive
let namaHewan = "Kucing"
let namahewan = "Ayam"
console.log(namahewan)
console.log(namaHewan)

// let namabuah = "Jeruk"
// let namabuah = "Anggur"

let namamakanan = "Coklat"
namamakanan = "Keju"
console.log(namamakanan)



// Tipe Data: String
// Semua yang diapit dengan "..." / '...' / `...`
let namaStudent = "Iqbal"
console.log(typeof namaStudent)

let point = "10"
console.log(typeof point)

let namaDepan = "Defryan"
let description = "Nama saya adalah " + namaDepan + "."
let description1 = `Nama saya adalah ${namaDepan}.` // String literal
console.log(description)
console.log(description1)

// Tipe Data: Number
let discount = 10 // Integer
let discount1 = 10.05 // Float
console.log(typeof discount)


// Tipe Data: Boolean
// Tipe data yang memiliki value true/false 
let isTrue = true 
let isFalse = false 
console.log(typeof isTrue)
console.log(typeof isFalse)

var school 
console.log(school)


// Cont. Tipe Data: Number
// Modulus ---> Hasil sisa bagi
console.log(10%3) // 1
console.log(15%3) // 0

// Operator: +
let angka1 = 1
let angka2 = 1
let angka3 = `Defryan`
console.log(angka1 + angka2 + angka3)

let n = 10
n *= 10
console.log(`n ${n}`) 

let counter = 1
counter++ // Increment
counter++ // counter += 1
counter-- // Decrement


// Tipe Data: Date
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())

// Prefix: Akan mendapatkan value setelahnya
let counter1 = 0
console.log(++counter1)
// Postfix: Akan mendapatkan value sebelum di counter
let counter2 = 10
console.log(counter2++) // Show: 10 - Real: 11
counter2++ // Real: 12
console.log(counter2++) // Show: 12 - Real: 13
counter2++ // Real: 14
console.log(counter2++) // Show: 14 - Real: 15
console.log(counter2)