let students = [
    {
        name: "Tito",
        email: "tito@gmail.com",
        score: 100
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        score: 99
    },
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        score: 101
    }
]

function CalculateStudent(arr){
    let score = [] // [100, 99, 101]

    for(let i=0; i<arr.length; i++){
        score.push(arr[i].score)
    }

    let scoreMin = Math.min(...score)
    let scoreMax = Math.max(...score)
    let average = score.reduce(
        (a, b) => a + b / arr.length
    );
    console.log(average)
}

CalculateStudent(students)