// Contant Time / O(1)
// Banyaknya input tidak akan mempengaruhi waktu proses dari algoritma tersebut
// Ex: 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getFirst(input){
   return input[0]; 
}
getFirst(myArray)



// Linear Time / O(n)
// Banyaknya input akan berbanding lurus dengan waktu proses dari algoritma tersebut
// Ex:
let newArray = [1, 5, 0, 6, 1, 9, 9, 2, 10, 11, 21, 1021];
function getMax(input){
    var max = 0;
    for (var i=0; i<input.length; i++){
        if (max < input[i])
            max = input[i];
    }
    return max;
}
let maxNumber = getMax(newArray);



// Quadratic Time / O^n
// Bisa terjadi karena menjalankan proses linear di dalam linear 
// n merupakan jumlah input yang dikuadratkan
// Ex: 
let myArr = [1, 5, 0];
function sort(input){
    var sortedArray = [];
    for (var i=0; i<input.length; i++){ // O(n)
        let min = input[i];
        for (var j=i+1; i<input.length; i++){ // O(n)
            if (input[i] < input[j])
                min = input[j];
        }
        sortedArray.push(min);
    }
    return sortedArray;
}
let sortedArray = sort(myArr);



// Ologn
// Ketika input yang diberikan sebesar n, maka tahapan suatu algoritma akan berkurang
// berdasarkan suatu faktor
// Ex: Binary Search
