let products = ["Apel", "Jeruk", "Mangga"]
let price = [10000, 15000, 20000]
let stock = [10, 15, 20]

// Object
// Berisikan sepasang property dan juga value
// CRUD
let product = {
    name: "Apel", // name: key & "Apel": value ---> Sepasang key & value disebut property
    price: 10000,
    stock: 10,
    origin: ["Malang", "Bandung", "Jogja"],
    getName: () => { // Method
        console.log("getName")
        console.log(this.name)
    },
    getName1(){
        console.log(this.name)
        console.log(this.origin[0])
    }
}
// console.log(product)
// console.log(product.name)
// console.log(product.price)
// console.log(product.stock)
// console.log(product["origin"][0])
// product.getName()
// product.getName1()

// product.name = "Apel Manis"
// console.log(product)

// delete product.name // Digunakan untuk menghapus key & value (property)
// console.log(product)

// product.origin.shift()
// console.log(product)



// Accessing Key
console.log(Object.keys(product))

// For in Loop
for(let key in product){
    console.log(key) // Untuk mendapatkan key nya saja
    console.log(product[key]) // Untuk mendapatkan value dari key 
}

// Optional Chaining ---> Digunakan untuk mengakses nested property secara aman
let user = {
    address: {
        street: "GOP 9"
    }
}

console.log(user.address)
console.log(user.address?.street)