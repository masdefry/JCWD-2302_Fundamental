let star = ''
let number = 1
for(let i=1; i<=3; i++){ // i=2
    for(let j=1; j<=i; j++){ // j=1; j<=i? True ---> j=2; j<=i? True 
        star += number
        number++ 
    }
    star += '\n'
}

// console.log(star)



// ****
// ***
// **
// *
let star1 = ''
for(let i=3; 1<=i; i--){
    for(let j=1; j<=i; j++){
        star1 += '*'
    }
    star1 += '\n'
}
// console.log(star1)



//        --*--
//        -***-
//        *****
let star3 = ''
for(let i=2; 0 <= i; i--){
    for(let j=0; j <= 4; j++){
        if(j >= i && j <= 4-i){
            star3 += '*' 
        }else{
            star3 += '-'
        }
    }
    star3 += '\n'
}

console.log(star3)