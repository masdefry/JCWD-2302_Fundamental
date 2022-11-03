// Buatlah sebuah function untuk memvalidasi data email dari setiap users.
// Apabila email sesuai, ubah isVerified menjadi true.
// Apabila email tidak sesuai, isVerified tetap null

let users = [
    {username: "bachtiar", email: "bachtiar@gmail.com", isVerified: null},
    {username: "mrafli", email: "mrafli@gmail.com", isVerified: null},
    {username: "vero", email: "veroyahoo.co.id", isVerified: null}
]

function Validate(dataUsers){
    for(let i=0; i<dataUsers.length; i++){
        if(dataUsers[i].email.includes("@")){
           dataUsers[i].isVerified = true
        }
    }

    return dataUsers
}

console.log(Validate(users))

