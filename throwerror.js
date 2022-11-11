let startPromise = new Promise((resolve, rejected) => {
    let response = {
        status: 200, 
        isError: false, 
        message: "Success Tapi Error!"
    }

    if(response.status === 200 && response.isError === true){
        resolve(response)
    }else if(response.status === 200 && response.isError === false){
        resolve(response)
    }
    else{
        rejected(response)
    }
})

const tryAndCatch = async() => {
    try {
        let result = await startPromise // Apabila success, akan disimpan ke result. Apabila gagal, langsung di pass ke .catch
       
        if(result.status === 200 && result.isError === true){
            throw "Error dari .then"
        }else{
            console.log("Berhasil!")
        }
    } catch (error) {
        console.log(error)
    }
}

tryAndCatch()