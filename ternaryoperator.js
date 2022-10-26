let txt = "Javascript"
if(txt === "Javascript"){
    console.log("Javascript")
}else{
    console.log("Not Javascript")
}

// Ternary Operator
// Condition? True : False
txt === "Javascript"? console.log("Javascript") : console.log("Not Javascript")
let point = 10
if(point < 5){
    console.log("Poin Kurang")
}else if(point < 8){
    console.log("Poin Cukup")
}else{
    console.log("Poin Lebih")
}

// Ternary Operator
point < 5? 
    console.log("Poin Kurang") : 
point < 8? 
    console.log("Poin Cukup") 
    : 
    console.log("Poin Lebih"); 
console.log(point < 5? "Poin Kurang" : point < 8? "Poin Cukup" : "Poin Lebih")