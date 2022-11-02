let products = [
    {name: "Apel", price: 10000, stock: 10},
    {name: "Jeruk", price: 15000, stock: 15},
    {name: "Mangga", price: 20000, stock: 20},
    {nama: "Anggur", price: 10000, stok: 30}
]

console.log(products[0])
console.log(products[1])
console.log(products[2])
console.log(products[3])
for(let i = 0; i < products.length; i++){
    console.log(products[i].name)
}

/*
    Purwadhika Mart
    Apel - Price: Rp. 10000 - Stock: 10
    Jeruk - Price: Rp. 15000 - Stock: 15
    Mangga - Price: Rp. 20000 - Stock: 20
*/
let output = `Purwadhika Mart \n`
for(let i=0; i<products.length; i++){
    output += `${products[i].name} - Price: Rp${products[i].price} - Stock: ${products[i].stock} \n`
}

console.log(output)
