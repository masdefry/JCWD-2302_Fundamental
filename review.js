// // Conditional Statement
// // If(condition){
// //  Code Program ---> Akan dijalankan ketika condition nya terpenuhi
// // }

// if(10 < 20){
//     console.log("Benar")
// }

// if(10 < 10){
//     console.log("Benar")
// }else{
//     console.log("Salah")
// }

// let angka1 = 30
// let angka2 = 20

// if(angka1 < angka2){
//     console.log("Angka1 Tidak Boleh Lebih Kecil dari Angka2")
// }else{
//     // Tampilkan hasilnya
//     console.log(angka1 / angka2)
// }



// Looping
// Mengulang sebuah program

// Case. Saya ingin berhitung mulai dari 1-5
for(let start = 1; start <= 5; start++){
    console.log(start)
}

// start = 1 ---> 1 <= 5? true ---> console.log(1) 
// start = 2 ---> 2 <= 5? true ---> console.log(2)
// start = 3 ---> 3 <= 5? true ---> console.log(3)
// ...
// start = 5 ---> 5 <= 5? true ---> console.log(5)
// start = 6 ---> 6 <= 5? false


let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0]) // 1
console.log(arr[1]) // 2
console.log(arr[2]) // 3
console.log(arr[3]) // 4
console.log(arr[4]) // 5
for(let start=0; start <= arr.length-1; start++){
    console.log(arr[start])
}

// start = 0 ---> 0 <= 4? true ---> console.log(arr[start]) = arr[0] = 1
// start = 1 ---> 1 <= 4? true ---> console.log(arr[start]) = arr[1] = 2
// ...
// start = 4 ---> 4 <= 4? true ---> console.log(arr[start]) = arr[4] = 5
// start = 5 ---> 5 <= 4? false