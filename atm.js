const { pinEntry } = require("./account");

function getBalance(amountToupdate){
    return accountBalance + amountToupdate;
}

function atmMachinePin(){
  let pinEntry = parseInt(prompt("enter your pin number"))
    checkPin(pinEntry);
}
 function deposit(){
    let depositAmount = parseInt(prompt('how much do you want to deposit?'));
    accountBalance += depositAmount
    alert("you have completed your deposit" + depositAmount + viewCurrentbalance )

 }

 function withdrawal(){
     let withdrawalAmount = parseInt(prompt('how much would you like to withdraw'));
     alert("minimum withdrawal is $500");
     if (withdrawalAmount <= accountBalance){
         alert ("withdrawal successful");
         alert ("display current balance");
     }
     else if (withdrawalAmount >= accountBalance){
         alert("insuficient funds");
     }

     }

    
 }

 module.exports.balance = accountBalance
 module.exports.getBalance = updateAccountBalance
 module.exports.atmMachinePin = pinEntry
 module.exports.deposit = depositAmount
 module.exports.withdrawal = withdrawalAmount
 console.log("module");