let jwbn = "acdab"
let kunciJwbn = "abdac"
let point = 0

for(let i=0; i<=jwbn.length-1; i++){
    if(jwbn[i] === kunciJwbn[i]){
        point += 10
    }else{
        point -= 5
    }
}
console.log(point)

// Buatlah sebuah program untuk menghitung jumlah huruf vokal pada suatu kata
// Ex. Input = "Purwadhika"
//     Output = 4

// Ex. Input = "Hello"
//     Output = 2

if("h" === "a"){
    console.log("Iya")
}else if("h" === "i"){
    console.log("Iya")
}else if("h" === "u"){
    console.log("Iya")
}else if("h" === "e"){
    console.log("Iya")
}else if("h" === "o"){
    console.log("Iya")
}