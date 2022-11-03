function CheckKeyObject(obj1, obj2){
    let arr1 = [] // [name, umur]
    for(let key in obj1){
        arr1.push(key)
    }

    let arr2 = [] // [umur, name]
    for(let key in obj2){
        arr2.push(key)
    }

    // let arr3 = Object.key(obj1) // [name, umur]

    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){ // name ada di arr2? True ---> umur ada di arr2? True
             
        }else{
            return false
        }
    }
    return true
}

let obj1 = {
    name: "",
    hobi: 0
}

let obj2 = {
    umur: 0,
    name: ""
}

console.log(CheckKeyObject(obj1, obj2))