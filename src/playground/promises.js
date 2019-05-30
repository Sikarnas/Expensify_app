const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data')
        reject('oh no')
    }, 1500)
    
})
promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error', error)
})