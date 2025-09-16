const addMoney = document.getElementById("AddMoney-btn")


addMoney.addEventListener("click", function(e){
    e.preventDefault();
    const Bank = document.getElementById("bank").value

    const BankaccountNumber = document.getElementById("Bank-accnumber").value

    const AddAmount = all("add-amound");
    const PinNumber = all("pin-number");

    const Taka =  parseInt (document.getElementById("taka").innerText)

    validation(BankaccountNumber,PinNumber);

    const totalAmount = AddAmount + Taka

    document.getElementById("taka").innerText = totalAmount

});

const withdraw = document.getElementById("withdraw-money")

withdraw.addEventListener("click", function(e){
    e.preventDefault();
    const agentBankaccountNumber = (document.getElementById("agent-Bank").value)

    const AddAmount = all("withdraw-amound");
    const PinNumber = all("withdraw-pin-number");

    validation(agentBankaccountNumber,PinNumber);

    const Taka =  parseInt (document.getElementById("taka").innerText)

    if (Taka>=withdrawAmount ) {
    const totalAmount = Taka - withdrawAmount;
    document.getElementById("taka").innerText = totalAmount
    }else{
        alert("your amount is low")
    }
});

const Transfar = document.getElementById("Transfer-money")

Transfar.addEventListener("click", function(e){
    e.preventDefault();

    const agentBankaccountNumber = (document.getElementById("Transfer-Bank").value)

    const AddAmount = all("Transfer-amound");
    const PinNumber = all("Transfer-pin-number");

    const Taka =  parseInt (document.getElementById("taka").innerText)

    validation(agentBankaccountNumber,PinNumber);

    if (Taka>=AddAmount) {
    const totalAmount = Taka - TransferAmount;
    document.getElementById("taka").innerText = totalAmount
    }else{
        alert("your amount is low")
    }
});

function all(id) {
    return(parseInt(document.getElementById(id).value));
}

    function validation (acc,pin){
        const validpin = 1234;
        if (acc.length !== 11 ) {
        alert("Provide Valid account Number")
        return;
        }
    if (pin!==validpin) {
        alert("please enter valid pin number")
        return;
        }
    }

// document.getElementById("add-button").addEventListener("click", function() {
//     document.getElementById("cashOut").style.display = "none"
//     document.getElementById("addMoney").style.display = "block"
//     document.getElementById("transaction1").style.display = "none"
// });

// document.getElementById("cashout-btn").addEventListener("click", function() {
//     document.getElementById("cashOut").style.display = "block"
//     document.getElementById("addMoney").style.display = "none"
//     document.getElementById("transaction1").style.display = "none"
// });

// document.getElementById("transfare").addEventListener("click", function() {
//     document.getElementById("cashOut").style.display = "none"
//     document.getElementById("addMoney").style.display = "none"
//     document.getElementById("transaction1").style.display = "block"
// });
