// let & const ---> Mengenal scope
//             ---> Variable yang di declare di outside scope, dia dapat diakses di inside scope
//             ---> Variable yang di declare di inside scope, tidak bisa di akses di outside scope

let number = 100
{
    let number = 10
    {
        console.log(number)
    }
}



















