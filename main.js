let opr=parseInt(prompt("Welcome to *901# Mobile Banking\n 1> Open an Account\n 2>Account Balance\n 3>Transfers\n 4>Airtime\n 5>Other Services\n 6>Mobile Wallet"))

if(opr===1){
    let message=parseInt(prompt("1>Savings Account\n 2>Current Account\n 3>Domicilary Account"))
}
else if(opr===2){
    let message=parseInt(prompt("1>Check Balance\n 2>Transfers\n 3>Airtime\n 4>Other Services\n 5>Mobile Wallet"))
}
else if(opr===3){
    let message=parseInt(prompt("1>YoungBank\n 2>FrankBank\n 3>Other Banks"))
    if(message===1){
        let message=parseInt(prompt("1>Account Number"))
    }if(message===1){
        alert("Money Sent")
    }
}
else if(opr===4){
    let message=parseInt(prompt("Choose Network\n 1>MTN\n 2>Airtel\n 3>Glo"))
    if(message===1){
        let message=parseInt(prompt("1>1000\n 2>500\n 3>300\n 4>100"))
        
    }if(message===1){
            alert("Airtime recharge Successful")
        }if(message===2){
            alert("Airtime recharge Successful")
        }if(message===3){
            alert("Airtime recharge Successful")
        }if(message===4){
            alert("Airtime recharge Successful")
        }
        if(message===2){
            let message=parseInt(prompt("1>1500\n 2>1000\n 3>500\n 4>300"))
            
        }
}