// Function
// Sebuah baris program yang disimpan ke dalam suata tempat

// Tahapan membuat function:
// 1. Build
// 2. Call

// Syntax:
// 1. Function Declaration ---> Bisa dipanggil sebelum function di build
Print() // Hoisting
function Print(){ 
    let text = "Hello, World"
    console.log(text)
}
Print()
Print()
Print()
// 2. Function Expression ---> Tidak bisa dipanggil sebelum function di build
let printProgram = function(nama, umur, hobi){
    console.log("Ayam Goreng")
}
printProgram()

// 3. Arrow Function
let showProgram = (nama, umur, hobi) => {

}

// Function with Parameter
// Parameter itu bisa lebih dari 1 dan penamaannya bebas
function Calculator(angka1, angka2){ // angka1, angka2 ---> Parameter
    console.log(angka1 + angka2)
}

Calculator(20, 10) // 20, 10 ---> Argument
// ...
// ...
// ...
Calculator(20, 50) // 20, 50 ---> Argument



function PrintDataDiri(nama, umur, hobi){
    console.log(`${nama}, ${umur}, ${hobi}`)
}

PrintDataDiri("Ryan", 17)



// Function With Return
// 1. Function yang hanya menjalankan sesuatu
// 2. Function yang menhasilkan sesuatu

function Validation(phoneNumber){
    // Memvalidasi phone number agar inputan user murni angka semua
    if(phoneNumber.toString().length < 8 || phoneNumber.toString().length > 13){
        return false
    }
    console.log(phoneNumber)
    if(isNaN(phoneNumber)){
        return false 
    }else{
        return true
    }
}

let result = Validation(08121341)

if(result){
    console.log("Data Sudah Benar! Register Success!")
}else{
    console.log("Data Salah! Register Gagal!")
}
