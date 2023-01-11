const cart = ["bread", "butter", "jam", "myo"]

api.CreateOrder(function () {
    
    api.PaymentRequest(function (){
        
        api.confirmation(function () {
           
            api.walletUpdate()
        
        })
    
    })

});

const promise = CreateOrder();

// {data: data }

promise.then(function () {
    api.PaymentRequest()
})

// api.CreateOrder()
// api.PaymentRequest()
// api.confirmation()
// api.walletUpdate()

// pyramid of doom
// inversion of control

