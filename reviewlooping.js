// Do While
// #1 Start condition
// #2 Sebuah kondisi
// #3 Exit way ---> Supaya tidak inifinite loop

let sc = 1 // Start condition
let ec = 3

while(sc <= ec){ // (sc <= ec) ---> Sebuah kondisi yang harus terpenuhi agar code di dalamnya jalan
    console.log("Pizza")
    sc = sc + 1 // Exit way ---> Merubah data sc yang ada di line 6
}

for(let sc = 1; sc <= 3; sc++){
    console.log("Pizza")
}