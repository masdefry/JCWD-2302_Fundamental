function GetAge(dobInput){ // dobInput: "1990-12-10"
    let dob = new Date(dobInput)
    let now = new Date()

    let dobToMs = dob.getTime()
    let nowToMs = now.getTime()
    let msPerDay = 1000 * 24 * 3600 * 365

    let dobInYear = dobToMs / msPerDay
    let nowInYear = nowToMs / msPerDay 

    return Math.floor(nowInYear - dobInYear)
}

function CalculateStudent(arr){
    let score = [] // [100, 99, 101]
    let age = []
    let newData = []

    for(let i=0; i<arr.length; i++){
        score.push(arr[i].score)
        age.push(arr[i].getDob())
        if(arr[i].getDob() >= 17){
            newData.push(arr[i])
        }
    }

    let scoreMin = Math.min(...score)
    let scoreMax = Math.max(...score)
    let average = score.reduce(
        (a, b) => (a + b)
    );

    let ageMin = Math.min(...age)
    let ageMax = Math.max(...age)
    let averageAge = age.reduce((a, b) =>( a + b))
    averageAge = Math.floor(averageAge / arr.length)
    
    let res = {
        data: "Score",
        min: scoreMin,
        max: scoreMax,
        average: average
    }
    let res1 = {
        data: "Age",
        min: ageMin, 
        max: ageMax,
        average: averageAge
    }

    return [res, res1]
}

let students = [
    {
        name: "Tito",
        email: "tito@gmail.com",
        dob: "1990-12-10",
        getDob(){
            return GetAge(this.dob) // "1990-12-10"
        },
        score: 100
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        dob: "1995-05-05",
        getDob(){
            return GetAge(this.dob)
        },
        score: 99
    },
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        dob: "2010-10-11",
        getDob(){
            return GetAge(this.dob)
        },
        score: 101
    }
]

console.log(CalculateStudent(students)) // [{}]

// function B(fromA){ // fromA = 5
//     return fromA // return 5
// }

// function A(){
//    return B(5) // 5
// }

// console.log(A())

// 1. Function A jalan
// 2. Memanggil Function B dan Mengirim Argument = 5
// 3. Di dalam Function B hanya me-return argument dari Function A (= 5)
// 4. Di dalam A dia nge-return hasil dari Function B







// Buat function untuk menyeleksi student. Dengan ketentuan apabila umur student kurang dari 17 tahun, 
// maka langsung hapus datanya. 
function Selection(arr){
    let newData = []

    for(let i=0; i<arr.length; i++){ 
        if(arr[i].getDob() >= 17){
            newData.push(arr[i])
        }
    }

    return newData 
}
console.log(Selection(students))

