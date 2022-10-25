// Mutable & Imutable
// Mutable: Sebuah tipe data yang value nya dapat diubah ketika di copy (array & object)
let arr1 = ['Ayam', 'Kucing', 'Gajah']
let newArr1 = arr1 
newArr1[0] = 100 // 1 ---> 100
console.log(newArr1)
console.log(arr1)

// Immutable: Sebuah tipe data yang value nya tidak dapat diubah ketika di copy (string, number, dll)
let nama = "Defryan"
let newNama = nama // "Defryan"
newNama = "Ryan Defryan"
console.log(nama)
console.log(newNama)