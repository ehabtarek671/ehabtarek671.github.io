function payment(){
    if(window.PaymentRequest){
        const paymentMethods = [
            {
              supportedMethods: ['basic-card'],
              data: {
                supportedNetworks: ['visa', 'mastercard', 'discover'],
                supportedTypes: ['credit']
              }
            }
          ]
          const paymentDetails=
            {
                total:{
                    label: 'Total Cost',
                    amount: {
                        currency: 'EGP',
                        value: 150
                    }
                }
            }
    
            const options =
            {}
            const paymentRequest = new PaymentRequest(
                paymentMethods,paymentDetails,options
            )
            paymentRequest.show();
    }
    else{
        alert("This payment way is not supported on your browser try to open this website from chrom");
    }
}