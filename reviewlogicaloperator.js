// Logical Operator
// AND &&
// - Kedua kondisi bernilai true, maka hasil akhir akan true
// - Apabaila salah satu kondisi bernilai false, maka hasil akhir akan false 
let point = 100
if(point && point > 100){ // True && False ---> False
    console.log("Point Tinggi!")
}

if(point && !(point > 100)){ // True && True ---> True
    console.log("Point Masih Tinggi!")
}

// OR ||
// - Salah satu kondisi bernilai true, maka hasil akhir akan true
// - Kedua kondisi bernilai false, maka hasil akhir akan false
let discount = 75
let result = discount || discount > 50? "ABC" : false // True || True ---> True

let newResult
if(discount || discount > 50){
    newResult = "ABC"
}else{
    newResult = false
}

// NOT !
// - Kebalikannya 