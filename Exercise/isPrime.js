let number = 7

let primeNumber = 0 

// for(let i=1; i<=number; i++){ // 1<=5? True; 2<=5? True; 3<=5? True; 4<=5? True; 5<=5? True
//     if(number % i === 0){ 
// // 5 % 1 === 0? True ---> 5 % 2 === 0? False ---> 5%3===0? False ---> 5%4===0? False ---> 5%5===0? True
//         primeNumber++ // primeNumber = "1" ---> primeNumber = "15"
//     }
// }

// if(primeNumber === 2){
//     console.log("is Prime")
// }else{
//     console.log("not Prime")
// }

for(let i=2; i <= number-1; i++){
    if(number % i === 0){
        console.log("Not Prime")
        break;
    }
    if(i === number-1){
        console.log("is Prime")
    }
}
