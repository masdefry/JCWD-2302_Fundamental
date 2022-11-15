// Yang membuat dia undefined
// - Declare variable tapi value nya masih belum ada
        let name
        console.log(name) // undefined
// - Mengakses terlebih dahulu variable dengan syntax var
        console.log(data)
        var data = "Purwadhika"
// - Parameter yang tidak mendapatkan argument
        function A(name, hobi){
            console.log(hobi)
        }

        A("Vero")
// - Key yang tidak di declare di dalam sebuah object
        let dataObj = {
            name: "Ryan"
        }
        console.log(dataObj.hobi)
// - Mengakses index yang tidak memiliki value
        let arr = [1, 2, 3]
        console.log(arr[100])



        function B(a, b, ...manyMore){
            let newData = [a, b, ...manyMore]
            return newData
        }

        console.log(B("A", "B", "C", "D", "E", 1, 2, 3))