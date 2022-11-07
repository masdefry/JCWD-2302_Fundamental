// Uppercase
// Ex. Input: abc ---> [a, b, c] ---> [A, b, c] ---> join = Abc ---> [a, b, c]
function Upper(str){
    str = str.split("")
    let result = ""
    for(let i=0; i<str.length; i++){
        str[i] = str[i].toUpperCase()
        result += str.join("") + '\n'
        str[i] = str[i].toLowerCase()
    }
    console.log(result)
}

// i=0 ---> str[0] a=str[0].toUpperCase()A ---> [A, b, c].join ---> result = "Abc" ---> [a, b, c]
// i=1 ---> str[1] b = str[1].toUpperCase() B ---> [a, B, c].join ---> result = "Abc \n aBc" ---> [a, b, c]


Upper("abc")

// MaxRange
// Ex. (AngkaPertama, MaxRange, Range) ---> (2, 10, 2) ---> [2, 4, 6, 8, 10]
//                                     ---> (3, 5, 1)  ---> [3, 4, 5]

function MaxRange(angPertama, maxRange, range){
    let newArr = []
    
    for(let i=angPertama; i <= maxRange; i+=range){
        newArr.push(i)
    }

    return newArr
}

console.log(MaxRange(2, 10, 2))



// Get Middle
function GetMiddle(str){
    if(str.length % 2 === 0){
        return str.slice(str.length/2-1, str.length/2+1) 
    }else{
        return str.slice(Math.floor(str.length/2), Math.floor(str.length/2)+1)
    }
}

console.log(GetMiddle("abc"))
console.log(GetMiddle("abcd"))



// Repeat Char
function RepeatChar(str){
    let result = ''

    for(let i=0; i<str.length; i++){
        result += str[i].toUpperCase()
        result += str[i].repeat(i).toLowerCase()
        result += '-'
    }
    
    return result.slice(0, result.length-1)
}

// i=0; result += "A" ---> result += "A-"
// i=1; result += "A-B" ---> result += "A-Bb" ---> result += "A-Bb-"
// i=2; result += "A-Bb-C" ---> result += "A-Bb-Ccc" ---> result += "A-Bb-Ccc-"
// i=3; Stop!

console.log(RepeatChar("abc")) 
