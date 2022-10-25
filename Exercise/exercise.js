// 1. Perimeter & Area of Rectangle
// Step1. Define variable: p, l
let panjangRectangle = 5
let lebarRectangle = 5
// Step2. Cari keliling: k = 2 * (p+l)
let kelilingRectangle = 2 * (panjangRectangle + lebarRectangle)
// Step3. Cari luas: l = p*l
let luasRectangle = panjangRectangle * lebarRectangle
console.log(kelilingRectangle)
console.log(luasRectangle)

// 2. Diameter, Circumference & Area of Circle
// Step1. Define variables: r = 10, phi = 3.14, diameter, kelilingLingkaran, luasLingkaran
let r = 10; let phi = 3.14; let diameter, kelilingLingkaran, luasLingkaran
// Step2. Mencari diameter: d = 2 * r
diameter = 2 * r

// Step3. Mencari keliling: kelilingLingkaran = phi * diameter
kelilingLingkaran = phi * diameter

// Step4. Mencari luas: luasLingkaran = phi * r * r
luasLingkaran = phi * r * r 
let output = `
    r = ${r},
    Phi = ${phi}, 
    Diameter = 2 x r = ${2 * r}, 
    Keliling = Phi * d = ${phi * diameter},
    Luas = Phi * r * r = ${phi * r * r}
`
console.log(output)

// 3. Difference between Dates in Days
// Step1. Define variables: day1, day2, day1ToMs, day2ToMs, msPerDay
let day1 = new Date("2022-10-25")
let day2 = new Date("2022-09-05")
// Step2. Konversikan day1 & day2 dalam bentuk ms
let day1ToMs = day1.getTime() // Get milisecond since 1 January 1970 - 25 Oktober 2022
let day2ToMs = day2.getTime()// Get milisecond since 1 January 1970 - 05 September 2022
// Step3. 1 hari berapa ms?
let msPerDay = 1000 * 24 * 3600 // second to ms dikali 1000; 24 = 24 jam; 3600 = second per hour
// Step4. Convert day1ToMs, day2ToMs menjadi hari
day1 = day1ToMs / msPerDay
day2 = day2ToMs / msPerDay

console.log(day1-day2)
// 4. Convert Days to Year, Month, Day