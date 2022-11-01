// Continue Function
// function Greeting(name, hobi){ //  Declaration
//     const hello = "Hello"

//     console.log(`${hello}, ${name}!`)
// }

// let greeting = function(){ // Expression

// }

let greeting1 = (name, bebas, asal) => { // name -> Parameter
    let hello = "Hai"
    console.log(`${hello}, ${name}!`)
}

greeting1("Defryan", 2020, "Futsal") // Defryan -> Argument


// Function with Default Parameter
let greeting2 = (name = "Username!") => {
    console.log(`Hai, ${name}`)
}

greeting2("Defryan")


// Rest Parameters
let myFunction = (a, b, ...manyMore) => {
    console.log(a)
    console.log(b)
    console.log(manyMore)
    console.log(manyMore[0] + manyMore[1])
}

myFunction("Nasi", "Air", "Teh", "Kopi")

let arrDuaDimensi = [["Purwadhika", ["Digital", "School"]], 1, true, false] // Array 2 Dimensi
console.log(arrDuaDimensi[0][1][0])



// Nested Function
let mutia = () => {
    let tito = () => {
        console.log("Tito")
    }
    tito()
    console.log("Mutia")
}
mutia()



// Closure Function
// Inner Function yang dapat mengakses variable dari outer function nya
let greeting = () => {
    let name = "Ryan"

    let cetak = () => {
        console.log(`Hello, ${name}`)
    }

    cetak()
}
greeting()



// Recursive Function
let countDown = (num) => {
    console.log(num) // 3 ---> 2

    num--  // 3-1 = 2 ---> 2-1 = 1

    if(num > 0){ // 2>0? True ---> 1>0? True
        countDown(num) // countDown(2) ---> countDown(1)
    }
}

countDown(3)

let print = (num) => { //angka = 10
    console.log(num)
}
let angka = 10
count(angka)

