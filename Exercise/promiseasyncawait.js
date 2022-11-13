let startPromise = new Promise((resolve, rejected) => {
    let response = { 
        status: 200, 
        isError: true, 
        message: "Login Success", 
        isData: true, 
        data: {username: "ryan", isVerified: false} 
    }

    if(response.status === 200 && response.isError === false){
        resolve(response)
    }else if(response.status === 200 && response.isError === true){
        resolve(response)
    }else{
        rejected(response.message)
    }
})

// Promise
startPromise
.then((res) => {
    if(res.status === 200 && res.isError === false){
        console.log(res.data)
    }else{
        throw res.message
    }
})
.catch((err) => {
    console.log(err)
})
