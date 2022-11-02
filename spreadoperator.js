// ... -> Spread Operator
// arr1 Immutable
let arr1 = ["Dhito", "Aswin", "Gilang"] 
let arr2 = [...arr1] // [Dhito, Aswin, Gilang]
arr2[0] = "Stephen" // arr2 = [Stephen, Aswin, Gilang]
console.log(arr1)
console.log(arr2)

// obj1 Immutable
let obj1 = {name: "Dhito"} 
let obj2 = {...obj1}
obj2.name = "Tito"
console.log(obj1)
console.log(obj2)

let arrData = ["Apel", "Jeruk", "Mangga"]

let [a, b, c] = [...arrData] // let [a, b, c] = Variable let a, let b, let c
console.log(c)


// ###
class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  // output: "static method has been called."
  