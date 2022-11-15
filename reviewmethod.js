let arr = ["Apel", "Jeruk", "Mangga", "Durian", "Anggur"]
let newArrSlice = arr.slice(0, 3) // [Apel, Jeruk, Mangga] ---> Digunakan untuk mengambil data, dimulai dari index ke-0 sampai ke-3 (tapi index ke-3 nya tidak ikut diambil)
console.log(newArrSlice)

arr.push("Manggis") // Menambahkan data di index paling akhir
console.log(arr)

arr.shift() // Menhapus data di dindex paling awal
console.log(arr)

arr.unshift("Melon") // Menambahkan data di index paling awal
console.log(arr)

arr.pop() // Menghapus data di index paling akhir
console.log(arr)



let students = ["Nathan", "Mutia", "Stephen", "Tito", "Rafli"]
// students.splice(0, 3) // Menghapus sebanyak 3data dimulai dari index ke-0
// students.splice(2, 0, "Fauzan") // Menunjuk index ke-2, ditambahkan Fauzan sehingga Stephen dst bergeser
// students.splice(0, 0, "Azwin")
// console.log(students)

console.log(students.indexOf("Nathan")) // indexOf digunakan untuk mencari index dari suatu data
console.log(students.indexOf("Raihan")) // -1 
console.log(students.indexOf("Fauzan")) // -1



// Truthy Falsy
// Mempersingkat code kita didalam pengkondisian

let username = "ryandefryan"
console.log(Boolean(username))

if(username){ 
    console.log("Data Username Benar")
}else{
    console.log("Data Username Salah")
}

