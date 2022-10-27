// Find Days
let totalHari = 400

let tahun = Math.floor(totalHari / 365) // Math object fungsinya pembulatan ke bawah 
                                        // Math.ceil() ---> Fungsinya pembulatan ke atas
                                        // Math.round() ---> Fungsinya pembulatan sesuai aturan matematika
let sisaHari = totalHari % 365 // 35

let bulan = Math.floor(sisaHari / 30)

sisaHari = sisaHari % 30 // 35 % 30 ---> 5 Hari

console.log(`
    ${totalHari} Hari = ${tahun} Tahun, ${bulan} Bulan dan ${sisaHari} Hari
`)

// Fibonacci
let fibo = "011" // 
let input = 5 

for(let i=3; i<input; i++){ // 3<5? True ---> 4<5? True ---> 5<5? False
    fibo += Number(fibo[i-1]) + Number(fibo[i-2]) // fibo += fibo[3-1] 1 + fibo[3-2] 1 = "0112" --->
    // fibo += fibo[4-1] 2 + fibo[4-2] 1 = "01123" 
}
console.log(fibo)
