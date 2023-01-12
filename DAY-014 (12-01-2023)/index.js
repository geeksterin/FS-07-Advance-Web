
// const MyData = fetch("https://api.github.com/users/rishabh32700")
// console.log(MyData);
// api.CreateOrder(function () {
//     api.PaymentRequest(function (){  
//         api.confirmation(function () {     
//             api.walletUpdate()     
//         })  
//     })
// });

// api.CreateOrder(cart)
// .then(function (orderId) {    
//     return api.PaymentRequest()
// }).then(function (paymentstatus) {
//     return api.confirmation()
// }).then(function (transDetails) {
//     return api.walletUpdate()
// })


const cart = ["bread", "butter", "jam", "myo"]
const promise2 = createOrder(cart)
console.log(cart);
promise2.then(function (orderId) {
    console.log(orderId);
    return paymentRequest(orderId)
}).then(function (res) {
    console.log(res);
    return confirmation(res)
}).then(function (status) {
    console.log(status);
    return walletUpdate(status)
}).then(function (walletBalance) {
    console.log(walletBalance);
}).catch(function (error) {
    console.log(error.message);
})

var tempOrderId
function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {
        const orderId = (Math.random() * 10000000).toFixed(0)
        tempOrderId = orderId
        if(cart.length === 4){
            resolve(orderId)
        }else{
            const error = new Error("your promise is rejected")
            reject(error)
        }
    })
    return promise
}


function paymentRequest (orderId) {
    const promise = new Promise(function (resolve, reject) {
        const status = "success"
        if(orderId === tempOrderId){
            resolve(status)
        }else{
            const error = new Error("payment Failed")
            reject(error)
        }
    })
    return promise
}


function confirmation(res) {
    const promise = new Promise(function (resolve, reject) {
   
        if(res === "success"){
            resolve("Order Successfull")
        }else{
            const error = new Error("order Failed")
            reject(error)
        }
    })
    return promise
}


function walletUpdate(status) {
    const promise = new Promise(function (resolve, reject) {
   
        if(status === "Order Successfull"){
            resolve("paise kat gyeeee")
        }else{
            const error = new Error("tera kharcha nai hua")
            reject(error)
        }
    })
    return promise
}