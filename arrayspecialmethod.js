// .forEach ---> Tidak menghasilkan array baru. Dia hanya sekedar nge-looping
// Parameter1 untuk mengambil masing-masing value dari dalam index
// Parameter2 untuk mendapat index value nya
// let arr1 = ["Stephen", "Alfa", "Tito"]
// let newArr1 = arr1.forEach((value, index) => { 
//     console.log(index)
//     console.log(value)
// })

// // .map ---> Menghasilkan array baru. Sering digunakan untuk show data on page
// let arr2 = ["WD", "UI/UX", "DM"]
// let newArr2 = arr2.map((value, index) => {
//     return value
// })

// // Ex .map. 
// let dataStudent = [
//     {name: "Alfa", gender: "Pria"},
//     {name: "Mutia", gender: "Wanita"},
//     {name: "Tito", gender: "Pria"}
// ]

// let newDataStudent = dataStudent.map(value => {
//     if(value.gender === "Pria"){
//         return `Mr. ${value.name}`
//     }else{
//         return `Mrs. ${value.name}`
//     }
// })

// let newArr = []
// let newDataForEach = dataStudent.forEach(value => {
//     if(value.gender === "Pria"){
//         newArr.push(`Mr. ${value.name}`)
//     }else{
//         newArr.push(`Mrs. ${value.name}`)
//     }
// })

// console.log(data)
// console.log(newDataStudent)
// console.log(newArr)

// console.log(newArr1)
// console.log(newArr2)

// .filter
let arrNum = [100, 200, 300, 50, 25, 0]

let newArrNum = arrNum.filter((value) => {
    if(value > 50){ return value }
})
console.log(newArrNum)