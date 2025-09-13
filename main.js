

    const addMoney = document.getElementById("AddMoney-btn")

    const validpin = 1234;
    addMoney.addEventListener("click", function(e){
        e.preventDefault();
        // console.log("click add money button")
        const Bank = document.getElementById("bank").value
        console.log(Bank)
        
        const BankaccountNumber = (document.getElementById("Bank-accnumber").value) 

        const AddAmount = parseInt(document.getElementById("add-amound").value)
        const PinNumber = parseInt(document.getElementById("pin-number").value)

        const Taka =  parseInt (document.getElementById("taka").innerText)

        if (BankaccountNumber.length !== 11 ) {
            alert("Provide Valid account Number")
            return;
        }

        if (PinNumber!==validpin) {
            alert("please enter valid pin number")
            return;
        }

        const totalAmount = AddAmount + Taka

        document.getElementById("taka").innerText = totalAmount

        
    });

    const withdraw = document.getElementById("withdraw-money")

    withdraw.addEventListener("click", function(e){
        e.preventDefault();
        // console.log("click add money button")
        const agentBankaccountNumber = (document.getElementById("agent-Bank").value) 

        const withdrawAmount = parseInt(document.getElementById("withdraw-amound").value)
        const PinNumber = parseInt(document.getElementById("withdraw-pin-number").value)

        const Taka =  parseInt (document.getElementById("taka").innerText)

        if (agentBankaccountNumber.length !== 11 ) {
            alert("Provide Valid account Number")
            return;
        }

        if (PinNumber!==validpin) {
            alert("please enter valid pin number")
            return;
        }

        const totalAmount = Taka - withdrawAmount;

        document.getElementById("taka").innerText = totalAmount

        
    });


    document.getElementById("add-button").addEventListener("click", function() {
        document.getElementById("cashOut").style.display = "none"
        document.getElementById("addMoney").style.display = "block"
    });
    
    document.getElementById("cashout-btn").addEventListener("click", function() {
        document.getElementById("cashOut").style.display = "block"
        document.getElementById("addMoney").style.display = "none"
    });
    
  
