// Buatlah program untuk memvalidasi username user
// Apabila username exist, tampilkan console.log("Username already exist")
// Apabila username not exist, simpan data nya

let users = [
    {username: "bachtiar", email: "bachtiar@gmail.com", isVerified: null},
    {username: "mrafli", email: "mrafli@gmail.com", isVerified: null},
    {username: "vero", email: "veroyahoo@co.id", isVerified: null},
]

function CheckUser(dataUser){
    for(let i=0; i<users.length; i++){ // i = 2
        if(users[i].username === dataUser[0].username){ // vero === ryan? False
            return "Username Already Exist"
        }
    }

    users.push(dataUser[0])
    return users
}

console.log(CheckUser([
    {
        username: "ryan",
        email: "ryan.fandy@gmail.com",
        isVerified: null
    }
]))
