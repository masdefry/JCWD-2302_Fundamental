// Scope ---> { ... } ---> Local scope
// - Variable yang di declare di outer scope, dapat diakses di inner scope
// - Variable yang di declare di inner scope, tidak dapat diakses di outer scope


{
    let a = "Hello"
    {
        {
            console.log(a)
        }
    }
}

{
    let b = "Hai"
    {
        console.log(b)
        {
            console.log(b)
        }
    }
}
console.log(b)