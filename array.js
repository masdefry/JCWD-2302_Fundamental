// Array
// Memiliki index penomoran untuk masing-masing data
let student1 = "Stephen"
let student2 = "Ashfi"
let student3 = "Aswin"
let student4 = "Nathan"
let student5 = "Tito"

student1 = "Gilang"

// CRUD
let students = ["Stephen", "Ashfi", "Aswin", "Nathan", "Tito"]

students[0] = "Gilang"

delete students[0]

// Method
let hewan = ["Kucing", "Anjing", "Gajah"]
// 1. Push ---> Digunakan untuk menambahkan data baru di dalam array 
//              dan di simpan setelah index paling terakhir
hewan.push("Jerapah", "Semut") // [Kucing, Anjing, Gajah, Jerapah, Semut]
console.log(hewan)

// 2. Unshift ---> Digunakan untuk menambahkan data baru sebelum index paling awal
hewan.unshift("Laba-Laba", "Harimau") //// [Laba-Laba, Harimau, Kucing, Anjing, Gajah, Jerapah, Semut]
console.log(hewan)

// 3. Pop ---> Digunakan untuk nge-delete data di index paling akhir
hewan.pop() // [Laba-Laba, Harimau, Kucing, Anjing, Gajah, Jerapah]
hewan.pop() // [Laba-Laba, Harimau, Kucing, Anjing, Gajah]
console.log(hewan)

// 4. Shift ---> Digunakan untuk nge-delete data di index paling awal
hewan.shift() // [ 'Harimau', 'Kucing', 'Anjing', 'Gajah' ]
console.log(hewan)

let makanan = ["Bakso", "Bakwan", "Martabak", "Seblak", "Nasi Padang"]
// 4. Splice(index, totalDataToDelete, dataToInsert)
// makanan.splice(1, 2)
// makanan.splice(2, 2, "Boba", "Ayam Goreng")
makanan.splice(1, 0, "Makanan Baru") // Menambahkan data sebelum index

// Add data manual x Add data splice
let campus = ["BSD", "Jakarta", "Batam"]
// campus.splice(12, 0, "Jogja")
campus[12] = "Jogja"
console.log(campus[9])
campus[9] = "Surabaya"
console.log(campus)

// 5. Slice(startIndex, endIndex) ---> endIndex tidak ikut diambil
let huruf = ["A", "B", "C", "D", "E"]
huruf = huruf.slice(0, 3) // A, B, C
console.log(huruf)

// 6. Includes & IndexOf
// Includes ---> Digunakan untuk mencari data
// IndexOf ---> Digunakan untuk mencari posisi dari data kita berada di index ke berapa
let minuman = ["Air", "Jus", "Teh", "Kopi", "Susu"]
console.log(minuman.includes("Jus"))
console.log(minuman.includes("teh"))
console.log(minuman.includes("aerrr"))
console.log(minuman.indexOf("Teh"))

// 7. Concat
let arr1 = ["1", "2", "3"]
let arr2 = ["4", "5", "6"]
console.log(arr1.concat(arr2))

// 8. Split ---> Memisahkan dari string ke array
let world = "Hello, Purwaldhika!"
// console.log(world.split(" "))
console.log(world.split(""))

console.log(world.split("l"))