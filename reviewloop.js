let data = [100, 200, 300] // ---> [101, 201, 301]

for(let i=0; i<data.length; i++){
    console.log(data[i])
}

for(let i=0; i<data.length; i++){
    console.log(data[i]+1)
}



let newData = [
    {num: 100}, 
    {num: 200}, 
    {num: 300},
    {num: 0}
] // 

let bebas1 = 0
for(let i=0; i<newData.length; i++){ // 0<4? True ---> 1<4? True
    if(newData[i].num > 0){ // 100>0? True ---> 200>0? True
        bebas1 += newData[i].num // bebas1 = 0 + 100 = 100;;; bebas1 = 100 + 200 = 300
    }
}

for(let i=0; i<newData.length; i++){
    console.log(newData[i].num)
}

for(let i=0; i<newData.length; i++){
    console.log(newData[i].num+1)
}

let bebas = 0
for(let i=0; i<newData.length; i++){
    bebas += newData[i].num
}
console.log(bebas)



// Positive Sum
// Ex.  Input: [1, 5, 100, -10, 0, -30]
//      Output: 106



// Sum Number Only
// Ex.  Input: [1, "abc", 100, -10, 0, -30]
//      Output: 61


// Find Multiple 5
// Ex.  Input: [1, 3, 10, 5, 100, 2, 8, 6]
//      Output: [10, 5, 100]



// Find Total Space
// Ex. Input: "Jangan-jangan kamu adalah aku!"
//     Output: "3 Space"



// Four Chars
// Create Function to Validate Total Character of String. Total Character Must Be < 10
// Ex. Argument1 = "abc" ---> return true
//     Argument2 = "purwadhikadigitalschool" ---> return false
//     Argument3 = "" ---> return false
function FourChars(argument){
    if(argument.length < 10){
        return true
    }else if(argument.length <= 0 ){
        return false
    }else{
        return false
    }
}

console.log(FourChars("abc"))
console.log(FourChars("purwadhikadigitalschool"))
console.log(FourChars(""))















// Remove "a" (Create with Function and looping)
// Ex.  Argument = "purwadhika" ---> return "purwdhik"
//      Argument = "hello" ---> return "hello"
//      Argument = "hai" ---> return "hi"
function RemoveA(str){
    let output = ""

    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase() !== "a"){
            output += str[i]
        }
    }

    return output 
}

console.log(RemoveA("purwadhika"))
console.log(RemoveA("hello"))
console.log(RemoveA("hai"))



// PR
// Kerjakan 5 code challenge di Codewars (bebas pilih)
// Kirim ke: muhammaddefryan@gmail.com
// Maksimal dikumpulkan: besok, jam 00.00