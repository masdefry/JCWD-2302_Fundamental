let startPromise = new Promise((resolve, rejected) => {
    let response = false 

    if(response === true){
        resolve("Response Success")
    }else{
        rejected("Response Gagal")
    }
})

const tryAndCatch = async() => {
    try {
        let result = await startPromise // Apabila success, akan disimpan ke result. Apabila gagal, langsung di pass ke .catch

        console.log(result)
    } catch (error) {
        console.log("Rejected diterima .catch")
    }
}

tryAndCatch()