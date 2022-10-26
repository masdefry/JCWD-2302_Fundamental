// // Loop Statement 
// // While
// // while(condition){
// //  ...
// // }

// let init = 2
// while(init < 3){ // 1 < 3? True ---> 2 < 3? True ---> 3 < 3? False
//     console.log("Pizza") // 1x ---> 2x
//     init++ // 1 ---> 2 ---> 3
// }

// // Do While
// let init1 = 1
// do{
//     console.log("Ayam Goreng") // 1x ---> 2x
//     init1++ // 1 ---> 2 ---> 3
// }while(init1 < 3) // 2 < 3? True ---> 3 < 3? False

// // While x Do While
// // While ketika pertama kali program dijalankan, dia akan cek kondisi terlebih dahulu
// // Do While akan jalan 1x ketika pertama kali program dijalankan 

// //  For Loop
// for(let i=1; i <= 5; i++){ // i <= 5? True ---> 2 <= 5? True ---> 3 <= 5? True ... 5 <= 5? True ---> 6<5? False
//     console.log(i) // 1 ---> 2 ---> 3 ... ---> 5
// }



// // Break & Continue
// // Break ---> Digunakan untuk menghentikan looping
// // Continue ---> Digunakan untuk men-skip code program di bawahnya

// // Case. Saya ingin mengecek value inputan dari user. 
// //       Apabila value nya mengandung huruf, maka langsung munculin error
// let nomorHp = "081abc"
// for(let i=0; i < nomorHp.length; i++){ // 0 < 6? True ---> 1 < 6? True ---> 2 < 6? True ---> 3 < 6? True
//     if(isNaN(nomorHp[i])){
// // nomorHp[0] = 0 < 0? False ---> nomorHp[1] = 8 < 0? False ---> nomorHp[2] = 1? False ---> nomorHp[3] = a? True
//         console.log("Inputan Error")
//         break;
//     }
//     console.log(nomorHp[i]) // 0 ---> 8 ---> 1
// }

// for(let i=1; i <= 5; i++){ 
//     console.log(i) // 1 ---> 2 ---> 3
//     if(i === 3){
//         break;
//     }
// }

// // isNaN ---> Apakah hasilnya NaN? 

for(let i=1; i<6; i++){ // 1<6? True ---> 2<6? True ---> 3<6? True
    if(i === 1){ // 1 === 3? False ---> 2 === 3? False ---> 3 === 3? True
        continue
    }
    console.log(i) // 1 ---> 2
}

