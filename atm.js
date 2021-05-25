let accountBalance = 2000;

function getBalance(amountToupdate){
    return accountBalance + amountToupdate;
}

module.exports.balance = accountBalance
module.exports.getBalance = updateAccountBalance

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
     let withdrawalAmount = parseInt(prompt('how much would you lime to withdraw'));
     
 }