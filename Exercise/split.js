let split = (text) => {
    let splitResult = text.split(" ")

    console.log(splitResult)
}
split("Hello World")
// ###################################################################################
// "saksajs vnnkdanka ajsalsaljsals"
// "saksajs, vnnkdanka, ajsalsaljsals"

let splitToString = (text) => {
    let newText = text.split(" ").join(", ") // [Purwadhika, Digital, School]

    // split = split.join(", ")
    return newText // "Purwadhika, Digital, School"
}

console.log(splitToString("Purwadhika Digital School"))