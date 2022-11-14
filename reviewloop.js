// Looping: starting point, condition, exit way
// - While: Dia memeriksa kondisi terlebih dahulu, baru menjalankan program di dalamnya
// - Do While: Selalu menjalankan program nya terlebih dahulu, kemudian memeriksa kondisi
// - For Loop: Sama sepert while. Hanya berbeda syntax penulisan nya

// // Case. Tampilkan setiap data yang ada di dalam array
// let arr1 = ["a", "b", "c"]
// for(let i=0; i < arr1.length; i++){
//     console.log(arr1[i])
// }

// // Case. Menampilkan seluruh hasil looping dari sebuah array
// // FOR LOOP
// let arr2 = [1, 2, 3]
// let newArr2 = []
// for(let i=0; i < arr2.length; i++){ // starting point: i=0; condition: i < arr2.length; exit way: i++
//     newArr2.push(arr2[i])
// }
// console.log(newArr2)

// // WHILE
// let start = 0 // starting point: start=0; condition: start < arr2.length; exit way: start++
// while(start < arr2.length){ // Kurung while itu hanya untuk condition saja
//     newArr2.push(arr2[start])
//     start++
// }



// // Case. Menjumlahkan setiap value yang ada di dalam array
// let nums = [1, 2, 3, 4, 5] // var a = 1+2+3+4+5
// let result = 0
// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// for(let i=0; i < nums.length; i++){
//     result += nums[i]
// }



// NESTED LOOP
let arrNumbers = [1, 2, 3]
let arrAlpha = ["A", "B", "C"]
for(let i=0; i < arrNumbers.length; i++){
    console.log(`Loop i: ${arrNumbers[i]}`)
    for(let j=0; j < arrAlpha.length; j++){
        console.log(`Loop j: ${arrAlpha[j]}`)
    }
}

let output = ''
for(a=1; a<=5; a++){ 
    for(b=a; b<=5; b++){
        output += '*'
    }
    output += '\n'
}

// loop1: a=1 ---> 1<=5? True
          b=1 ---> 1<=5? *
          b=2 ---> 2<=5? *
          b=3 ---> 3<=5? *
          b=4 ---> 4<=5? *
          b=5 ---> 5<=5? *
                         \n
          i++
// loop2: a=2 ---> 2<=5? True
          b=2
