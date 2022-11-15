// 1. Perhatikan code berikut ini! Hasil dari console.log(angka) adalah
/*
    let angka = 12
    angka *= `2` // 24
    angka++ // 25
    angka++ // 26
    angka += '1' // '261'
    console.log(angka)
*/
// x "261"
// b. 261
// c. 1241
// d. "1241"













// 2. Apakah hasil console pada program di bawah ini?
/*
    let strNumber = '20abc'
    strNumber = Number(strNumber) // NaN
    strNumber = String(strNumber) // "NaN"
    console.log(strNumber) // "NaN"
    console.log(typeof strNumber) // String
*/
// a. 20 & Number
// x NaN & String
// c. Null & String
// d. NaN & NaN



// 3. Berikut ini penamaan variable yang tepat sesuai dengan aturan Javascript, yaitu?
// a. let #myName
// x var $myName
// x const _myName
// d. Semua jawaban salah



// 4. Berikut ini yang merupakan tipe data primitive, kecuali?
// a. String
// x Array
// c. Number
// d. Null



// 5. Dibawah ini manakah variable yang menghasilkan value undefined 
//    apabila variable  tersebut di akses terlebih dahulu sebelum didefine?
// x var
// b. let ---> Error Not defined
// c. const ---> Error Not defined
// d. Semua jawaban salah



// 6. Perhatikan code berikut! Hasil dari console di bawah ini apabila di jalankan di terminal adalah?
/*
    const name = "Budi"
    console.log("Nama saya ${name}") ---> Nama saya ${name}
*/
// a. Nama saya Budi
// b. Nama saya "Budi"
// c. TypeError: Assignment to constant variable.
// x Semua jawaban salah



// 7. Berikut ini, manakah pernyataan yang paling tepat? SALAH SEMUA
// a. Variable yang dideclare menggunakan var, value nya tidak dapat diubah
// b. Variable yang dideclare menggunkan const, valuenya dapat diubah
// c. Variable yang dideclare menggunakan let, tidak memiliki aturan scope
// d. Variable yang dideclare menggunakan var, tidak bisa di duplicate



// 8. Berikut ini pernyataan yang tepat mengenai conditional statement adalah?
// a. Untuk menjalankan program secara berulang-ulang
// x Untuk mengambil keputusan 
// c. Untuk menampilkan data yang telah di proses
// d. Untuk menghentikan suatu baris code



// 9. Perhatikan code berikut. Hasil dari console.log berikut adalah? 
/*
let point1 = 10
let point2 = 100
let result = point1 < point2 
console.log(result) 
*/
// a. 10
// b. 100
// x true
// d. false



// 10. Bagaimanakah hasil dari program berikut apabila kita running?
/*
    let point = 5

    do{
        point++ // 6
        console.log("Point Bertambah") // 1x
        point = 0 // 6 ---> 0
    }while(point <= 5)

    while(point >= 5){
        console.log("Point Terus Bertambah")
    }
*/
// a. Looping do while dijalankan 1x dan looping while akan infinite loop
// b. Looping do while akan infinite loop dan looping while akan dijalankan 1x
// x Looping do while akan infinite loop dan looping while tidak akan pernah jalan
// d. Semua jawaban salah



// 11. Berikut ini yang merupakan falsy Javascript yaitu?
// a. " "
// b. 2020
// c. []
// x -0



// 12. Perhatikan code berikut! Hasil dari kedua console.log adalah?
/*
    let platNomor = "B 1234 A"
    console.log(String(platNomor))
    console.log(Number(platNomor))
*/
// a. "B 1234 A" & 1234
// x "B 1234 A" & NaN
// c. "BA" & 1234
// d. Undefined & NaN



// 13. Berikut pernyataan yang tepat mengenai looping while dan do while yaitu?
// a. While menjalankan action terlebih dahulu, dilanjutkan dengan memeriksa kondisi 
// b. While akan menjakankan action apabila kondisinya tidak terpenuhi
// x Do While menjalankan action terlebih dahulu, dilanjutkan dengan memeriksa kondisi
// d. Do While tidak membutuhkan sebuah kondisi untuk menjalankan action nya



// 14. Hasil dari code berikut apabila dijalankan yaitu?
/*
    const nilai = 0
    const jawaban = 'acdab'
    const kunciJawaban = 'abdab'
    for(let i=0; i<jawaban.length; i++){
        let result = false // Define di dalam local scope

        if(jawaban[i] === kunciJawaban[i]){
            result = true
        }

        if(result){
            nilai += 20
        }
    }
    console.log(result) // Kita mencoba mengakses di outside scope nya
*/
// x ReferenceError: result is not defined
// b. ReferenceError: Assignment to constant variables
// c. SyntaxError: Identifier 'result' has already been declared
// d. Undefined



// 15. Manakah code dibawah ini yang menghasilkan data bertipe Boolean yang bernilai true?
// x console.log(1 == '1')
// b. console.log(null === undefined)
// c. console.log(10 === '10')
// x console.log(String(20) === "20")



// 16. Hasil dari console.log di bawah ini yaitu?
/*
    let printLn = "Hello"

    if(printLn){
        printLn += ", World!"
    }else{
        printLn = "Hai, Dunia!"
    }
*/
// x "Hello, World!"
// b. ", World!"
// c. "Hai, Dunia"
// d. Semua jawaban salah



// 17. Berikut ini yang merupakan comparison operator, kecuali?
// x => ---> >=
// b. <=
// c. ==
// d. ===



// 18. Berikut ini yang merupakan tipe data yang bersifat imutable, kecuali?
// a. String
// b. Number
// x Array
// d. NaN



// 19. Perhatikan code berikut! Apa yang akan terjadi apabila program tersebut dijalankan?
/*
    let campus = "Purwadhika BSD"

    {
        var campus = "Purwadhika JKT"
    }

    console.log(campus)
*/
// a. Purwadhika BSD
// b. Purwadhika JKT
// x Error (Identifier 'campus' has already been declared)
// d. Error (Assignment to constant variable)



// 20. Perhatikan code berikut! Apa yang akan terjadi apabila program dijalankan?
/*
    let nilaiModul = 70

    if(nilaiModul > 50){
        console.log("Anda Remedial")
    }
    if(nilaiModul > 60){
        console.log("Anda Hampir Tidak Remedial")
    }
    if(nilaiModul >= 70){
        console.log("Anda Lulus")
    }
*/
// a. Anda Remidial
// b. Anda Hampir Tidak Remidial
// c. Anda Lulus
// x Semua jawaban salah

let nilaiModul = 70

    if(nilaiModul > 50){
        console.log("Anda Remedial")
    }
    
    if(nilaiModul > 60){
        console.log("Anda Hampir Tidak Remedial")
    }
    
    if(nilaiModul >= 70){
        console.log("Anda Lulus")
    }



    /*
        let const = 123
        const < 123? const = 321 : console.log("Hello")
    */
