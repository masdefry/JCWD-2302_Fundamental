// Palindrome

let input = "KaTaK"
input = input.toLowerCase()
let inputReverse = ""

for(let i = input.length-1; 0 <= i; i--){
    inputReverse += input[i]
}

if(input === inputReverse){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}