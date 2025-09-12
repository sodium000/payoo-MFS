

    const addMoney = document.getElementById("AddMoney-btn")

    addMoney.addEventListener("click", function(e){
        e.preventDefault();
        // console.log("click add money button")
        const Bank = document.getElementById("bank").value
        console.log(Bank)
        
        const BankaccountNumber = parseInt(document.getElementById("Bank-accnumber").value) 

        const AddAmount = parseInt(document.getElementById("add-amound").value)
        const PinNumber = parseInt(document.getElementById("pin-number").value)

        const Taka =  parseInt (document.getElementById("taka").innerText)

        const totalAmount = AddAmount + Taka

        document.getElementById("taka").innerText = totalAmount

        
    });
