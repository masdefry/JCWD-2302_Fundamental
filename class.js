// Class
// Digunakan untuk membuat sebuah object dengan nama key yg seragam

// class Products{
//     name = "";
//     price = 0;
//     stock = 0;

//     constructor(name, price, stock){
//         this.name = name,
//         this.price = price,
//         this.stock = stock
//     }
// }

// let product1 = new Products("Apel", 10000, 10)
// let product2 = new Products("Jeruk", 15000, 15)
// console.log(product1)
// console.log(product2)



// let arrProducts = [
//     new Products("Apel", 10000, 10),
//     new Products("Jeruk", 15000, 15)
// ]
// console.log(arrProducts)
// for(let i=0; i < arrProducts.length; i++){
//     console.log(`${arrProducts[i].name}`)
// }



// Inheritance ---> Pewarisan Property
// Buah
// 1. Nama, Harga, Stok, Warna, Berat, Satuan
// Elektronik
// 1. Nama, Harga, Stok, Warna, Berat, Satuan, Merk, Ukuran
// Pakaian
// 1. Nama, Harga, Stock, Warna, Ukuran, Merk, Bahan, Tipe

// Yang sama: Nama, Harga, Stok, Warna

// class NewProducts{ // Parent
//     nama = "";
//     harga = 0;
//     stok = 0;
//     warna = "";

//     constructor(nama, harga, stok, warna){
//         this.nama = nama,
//         this.harga = harga,
//         this.stok = stok, 
//         this.warna = warna
//     }
// }

// class Buah extends NewProducts{ // Child
//     berat = 0;
//     satuan = "";

//     constructor(nama, harga, stok, berat, warna, satuan){ // nama: "Apel", harga: 10000, stok: 10, berat: 1, warna: "Merah", satuan: "Kg"
//         super(nama, harga, stok, warna)
//         this.satuan = satuan,
//         this.berat = berat
//     }
// }

// class Elektronik extends NewProducts{ // Child
//     berat = 0;
//     satuan = 0;
//     merk = "";
//     ukuran = 0;

//     constructor(nama, harga, stok, warna, berat, satuan, merk, ukuran){
//         super(nama, harga, stok, warna)
//         this.berat = berat, 
//         this.satuan = satuan,
//         this.merk = merk,
//         this.ukuran = ukuran
//     }
// }

// class Pakaian extends NewProducts{ // Child
//     ukuran = 0;
//     merk = "";
//     bahan = "";
//     tipe = ""

//     constructor(nama, harga, stok, warna, ukuran, merk, bahan, tipe){
//         super(nama, harga, stok, warna) 
//         this.ukuran = ukuran,
//         this.merk = merk,
//         this.bahan = bahan, 
//         this.tipe = tipe
//     }
// }



// Public & Private Property
// class User{
//     #name = ""; // Public Property
//     #email = ""; // Private Property

//     constructor(name, email){
//         this.#name = name,
//         this.#email = email
//     }
// }

// let user1 = new User("ryan", "ryan@gmail.com")
// console.log(user1)


// Getter & Setter
class User1{
    name = ""; // Public Property
    #email = ""; // Private Property

    constructor(name){
        this.name = name
    }

    get getEmail(){ // Getter ---> Untuk mengambil data khususnya data private atau data yang ingin dimodifikasi terlebih dahulu
       if(this.#email.length !== 0){
        let modified = `***${this.#email.slice(4, this.#email.length)}`
        return modified
       }else{
        return "Email Tidak Ada"
       }
    }

    set saveEmail(email){
        if(!email.includes("@")){
            console.log("Email Not Valid!")
        }else{
            this.#email = email
        }
    }
}

let user2 = new User1("ryan")
user2.saveEmail = "aswin05gmail.com"
console.log(user2)
console.log(user2.getEmail)



// let email = "ryannn@gmail.com"
// let arrEmail = email.split("@")
// let newEmail = "" // r****
// console.log(arrEmail)

// for(let i=0; i<arrEmail[0].length; i++){ // ["ryannn", "gmail.com"]
//     if(i === 0 || i === arrEmail[0].length-1){
//         console.log(arrEmail[0][i])
//        newEmail += arrEmail[0][i]
//     }else{
//         newEmail += "*"
//     }
// }

// console.log(newEmail)



// class User2{
//     name = "";
//     email = "";

//     constructor(name){
//         this.name = name
//     }
//     get getEmail(){
//         return `***${this.email.slice(4, this.email.length)}`
//     }

//     set Email(input){
//         if(input.includes("@")){
//             this.email = input 
//         }else{
//             console.log("Email Tidak Valid!")
//         }
//     }
// }

// let newUser1 = new User2("Ryan")
// newUser1.Email = "ryangmail.com"
// console.log(newUser1)
// console.log(newUser1.getEmail)