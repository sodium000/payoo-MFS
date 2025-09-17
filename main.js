



    const AllData = [];
    console.log(AllData);

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

    AllData.push({
        Name : "AddAmount",
        Date : new Date().toLocaleTimeString()
    })

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

        AllData.push({
        Name : "CashOut",
        Date : new Date().toLocaleTimeString()
    })
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

        AllData.push({
        Name : "Transfar Amaound",
        Date : new Date().toLocaleTimeString()
    })
});

const bonous = document.getElementById("bonous-money")

bonous.addEventListener("click", function(e){
    e.preventDefault();

    const agentBankaccountNumber = all("bonous-amound");

    const Taka =  parseInt (document.getElementById("taka").innerText)


    const totalAmount = agentBankaccountNumber + Taka

    document.getElementById("taka").innerText = totalAmount

        AllData.push({
        Name : "Get Bonous",
        Date : new Date().toLocaleTimeString()
    })
});



const payaddMoney = document.getElementById("pay-AddMoney-btn");
payaddMoney.addEventListener("click", function(e){
    e.preventDefault();
    const Bank = document.getElementById("payBank").value

    const BankaccountNumber = document.getElementById("pay-Bank-accnumber").value

    const AddAmount = all("pay-add-amound");
    const PinNumber = all("pay-pin-number");

    const Taka =  parseInt (document.getElementById("taka").innerText)

    validation(BankaccountNumber,PinNumber);

    const totalAmount = Taka-AddAmount

    document.getElementById("taka").innerText = totalAmount

        AllData.push({
        Name : "Pay Bill",
        Date : new Date().toLocaleTimeString()
    })

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

    function toggle (){
        const alltogClass = document.getElementsByClassName("tog");
        for(let toggles of alltogClass){
            toggles.style.display="none"
        }
    };
    toggle();

    function allData (Data){
        const mainDiv = document.getElementById("allData")

        for(const data of Data){
            const div = document.createElement("div")
            div.innerHTML=`<div class="flex items-center justify-between max-w-lg mx-auto rounded-md trans-bg" id="data">
            <div class="flex items-center gap-2 mb-5">
                <img src="./assets/purse1.png" alt="" class="trans-img">
                <div>
                    <h1 class="pt-1 mb-2 tren-h">${data.Name}</h1>
                    <p class="tren-time">${data.Date}</p>
                </div>
            </div>
            <div class="p-4 rotate-90">
                <i class="fa-solid fa-ellipsis"></i>
            </div>   
        </div>`

        mainDiv.append(div);
        }
    }



document.getElementById("add-button").addEventListener("click", function() {
    toggle()
    document.getElementById("addMoney").style.display = "block"
});

document.getElementById("cashout-btn").addEventListener("click", function() {
    toggle()
    document.getElementById("cashOut").style.display = "block"
});

document.getElementById("transfare").addEventListener("click", function() {
    toggle()
    document.getElementById("transaction1").style.display = "block"
});

document.getElementById("getBonous").addEventListener("click", function() {
    toggle()
    document.getElementById("get-bonous").style.display = "block"
});


document.getElementById("paybill").addEventListener("click", function() {
    toggle()
    document.getElementById("paybills").style.display = "block"
});

document.getElementById("trans").addEventListener("click", function() {
    toggle()
    document.getElementById("allData").style.display = "block"
    allData(AllData);
});



