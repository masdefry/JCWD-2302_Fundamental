// Variable / Var
// Sebuah wadah untuk menampung data

// var
// - Tidak mengenal scope
// - Variable nya dapat di duplicate
// - Apabila diakses terlebih dahulu akan undefined
// - Value nya dapat diubah

// let
// - Mengenal scope
// - Variable nya tidak dapat di duplicate
// - Apabila diakses terlebih dahulu akan error: ReferenceError: Cannot access 'a' before initialization
// - Value nya dapat diubah

// const
// Mirip seperti let, dan value nya tidak dapat diubah
const url = 'https://jsonplaceholder/users'



// CRUD menggunakan let
let student1 = "Stephen" // Declare + Assign
let student2 = "Tito" // Declare + Assign
let student3, student4, student5 // Declare
student3 = "Pamela"
student4 = "Mutia"
console.log(student5)
let studnet6 = "Nathan", student7 = "Gilang" // Declare + Assign Multiple

console.log(student1)

student1 = "Alfa"



// Const 
// const kampus = "BSD"
// kampus = "Batam" // TypeError: Assignment to constant variable. 
// console.log(kampus)

// const arr = [1, 2, 3]
// arr = [] // Error, karena merubah struktur valuenya
// arr[0] = 0 // Tidak error, karena hanya merubah value yang ada di dalam wadah
// console.log(arr)

const str = "Hello"
const newStr = str.concat(", World!")
console.log(newStr)



// Mutable vs Immutable
// Mutable: Variable yang dapat diubah value nya (array & object)
let arr = [1, 2, 3]
let newArr = arr // Meng-copy, maka arr lama nya akan terpengaruh
let newNewArr = [...arr]
newNewArr[0] = 0
console.log(newNewArr)
console.log(arr)

// Immutable: Variable yang tidak dapat diubah value nya (Selain array & object)
let strings = "Purwadhika"
let newStrings = strings 
newStrings += "Digital School"
console.log(newStrings)
console.log(strings)