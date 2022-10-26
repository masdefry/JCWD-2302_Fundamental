// if
// if(condition){ Apabila kondisinya bernilai true
//  ...
// }
let age = 17
if(age > 17){ // False
    console.log('Register Success')
}

// if - else
// if(condition){ Apabila kondisinya bernilai true
//  ...
// }else{ Action default apabila kondisi pertama gagal/bernilai false
//  ...
// }
let ageUser = 20
if(ageUser > 17){
    console.log('Register Success')
}else{ 
    console.log('Register Failed!')
}

// if - else if - else if - ... - else
// if(condition){ Apabila kondisinya bernilai true
//  ...
// }else if(condition){
//  ...    
// }else{ Action default apabila kondisi pertama gagal/bernilai false
//  ...
// }
let nilaiModul = 1000
if(nilaiModul < 80){
    console.log('Remedial')
}else if(nilaiModul <=100){
    console.log('Lulus')
}else{
    console.log('Nggak Ada!')
}

// Nested If ---> If di dalam If
let point = 10
if(point > 0){
    if(point < 30){
        console.log('Point Sedikit')
    }else{
        console.log('Point Banyak')
    }
}else{
    console.log('Point Kosong')
}

let point1 = "0"
if(point1 >= 0){ // "0" >= 0? True
    if(point1 < 30){
        console.log('Point Sedikit')
    }else{
        console.log('Point Banyak')
    }
}else{
    if(point1 > -10){
        console.log('Point Minus')
    }
}