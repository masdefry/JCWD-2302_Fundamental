let products = {
    name: "Umbrella",
    price: 125000,
    variant: [
        {
            color: "Purple"
        },
        {
            color: "Blue"
        }
    ]
}

let saveJSON = JSON.stringify(products)
console.log(saveJSON)
saveJSON = JSON.parse(saveJSON)
console.log(saveJSON.name)