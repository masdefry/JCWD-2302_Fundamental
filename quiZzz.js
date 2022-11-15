// 1. Sebutkan macam-macam comparison operator dan logical operator!
// Comparison operator: >, >=, <, <=, ==, ===, !==
// Logical operator: && AND, || OR, ! NOT
// 2. Apakah perbedaan antara AND, OR dan juga NOT?
// AND: Kondisi keduanya harus true ---> True
// OR: Salah 1 kondisi bernilai true ---> True
// NOT: Negasi
// 3. Perhatikan code berikut! Apa yang akan terjadi apabila program berikut dijalankan?
/*
    function GetArr(arr){ ---> Undefined 
        return arr.forEach(value => {
            return value
        })
    } 

    function GetValue(arr){ ---> ["A", null, true, undefined, 20]
        return arr.map(value => {
            return value
        })
    }

    let arr = ["A", null, true, undefined, 20]
    console.log(GetArr(arr))
    console.log(GetValue(arr))
*/
// 4. Sebutkan perbedaan variable yang di declare dengan menggunakan syntax var, let dan juga const!
// var
// - Tidak mengenal scope
// - Dapat di duplicate
// - Value nya dapat diubah
// let
// - Mengenal scope
// - Tidak dapat di duplicate
// - Value nya dapat diubah
// const
// Mirip dengan let, hanya value nya tidak bisa diubah
// 5. Sebutkan perbedaan antara looping while, do while dan juga for loop!
// While: Memeriksa kondisi, baru jalan
// Do While: Jalan sekali, baru memeriksa kondisi 
// For Loop: Sama seperti while
// 6. Sebutkan 5 build in method yang ada di Javascript!
// .toString(), .parseInt(), .parseFloat(), .toLowerCase(), .toUpperCase()
// 7. Perhatikan code berikut! Apakah hasil console.log program di bawah ini?
/*
    var name = "Defryan"
    let newName = name
    newName = "Ryan"
    console.log(name) // "Defryan"
    console.log(newName) // "Ryan"

    var listSiswa = ["Stephen", "Nathan", "Syahrul"]
    let newListSiswa = [...listSiswa] // ["Stephen", "Nathan", "Syahrul"]
    newListSiswa[0] = "Fauzan" // ["Fauzan", "Nathan", "Syahrul"]
    console.log(listSiswa) // ["Stephen", "Nathan", "Syahrul"]
    console.log(newListSiswa) // ["Fauzan", "Nathan", "Syahrul"]
*/
// 8. Sebutkan perbedaan antara mutable dan immutable! 
// - Mutable: Data aslinya bisa berubah
// - Immutable: Data aslinya tidak bisa diubah
// 9. Sebutkan 3 contoh truthy dan falsy Javascript!
// Truthy: [], 10, {}
// Falsy: "", null, undefined, 0, dll
// 10. Perhatikan code berikut ini! Tuliskan dalam bentuk ternary operator!
/*
    if(10 !== "10"){
        return 10
    }else if(10 !== 10){
        return "10"
    }else{
        return 10
    }
*/
// 10 !== "10"? return 10 : 10 !== 10? return "10" : return 10;
// 11. Sebutkan perbedaan break dan juga continue!
// Break: Untuk menghentikan proses pengulangan / program
// Continue: Untuk men-skip program di bawahnya
// 12. Sebutkan perbedaan method push, unshift, shift dan juga pop!
// Push: Masukin data dalam array di paling akhir
// Unshift: Masukin data di paling awal
// Shift: Menghapus data di paling awal
// Pop: Menghapus data di paling akhir
// 13. Perhatikan code berikut! Manakah penadeklarasian variable yang tidak sesuai
//     dengan aturan JS?
/*
        let $tudentLists = ["Rafli", "Dhito", "Vero"] TRUE
        var KampusPWD = "Bsd, Jkt, Btm" TRUE
        const _e_commerce = null TRUE
        let programmingLanguage = { Javascript, PHP, Java } FALSE
        var comp4ny = "Bithealth, Tokopedia, Werkdone" TRUE
*/
// 14. Sebutkan macam-macam data structure dan juga cara kerjanya!
// - Stack: LIFO
// - Queue: FIFO
// - Set: Data nya tidak boleh duplicate
// - Linkedlist: Menunjuk data sebelum/sesudahnya
// - Hashmap: Mirip object
// 15. Apakah perbedaan antara forEach, .map dan juga .filter?
// 16. Jelaskan secara singkat proses synchronous dan asynchronous!
// - Synchronous: Program dijalankan secara berurutan
// - Asynchronous: Program dijalankan secara paralel
// 17. Apa itu hoisting?
// Program kita ditarik ke atas
// 18. Buatlah contoh program dengan menggunakan indirect callback function!
// 
// 19. Perhatikan data berikut! Tuliskan syntax yang tepat untuk menambahkan
//     buah "Pear" dan menghapus buah "Apel" menggunakan method splice!
//      let arrBuah = ["Pisang", "Apel", "Jeruk", "Mangga", "Apel"]
// arrBuah.splice(1, 1, "Pear")
// 20. Sebutkan macam-macam tipe data primitive dan non primitive!
// Primitive: String, Number, Null, Undefined, Boolean
// Non-primitive: Object & Array












let arr = [1, 2, 3]
let newData = arr.forEach(value => { value }) // forEach hanya me-looping namun tidak menghasilkan array baru 
let newDataSatu = arr.map(value => { return value }) // map me-looping sekaligus menghasilkan array baru
console.log(newData)
console.log(newDataSatu)