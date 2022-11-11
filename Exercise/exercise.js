// 1. Buatlah 2 buah function. Function-1 untuk memvalidasi email.
//    Function-2 untuk nge-return hasil validasi (true/false).
//    (Buatlah menggunakan indirect callback maupun direct callback)

// 2. Buatlah sebuah handling error untuk sebuah promise dengan beragam bentuk response sbb:
//    - Apabila status: 200 & isError: false ---> console.log datanya
//      { status: 200, isError: false, message: "Login Success", isData: true, data: {username: "ryan", isVerified: false} }
//    - Apabila status: 200 & isError: true ---> Throw message nya
//      { status: 200, isError: true, message: "Username already exist", isData: false, data: {} }
//    - Apabila status: 500 & isError: true ---> Tampilin error message nya di catch
//      { status: 500, isError: true, message: "Error on Server", isData: false, data: {} }

// 3. Lakukan get data ke API berikut 
//    menggunakan promise & async-await: https://jsonplaceholder.typicode.com/users
//    Gunakan method fetch (stackoverflow)