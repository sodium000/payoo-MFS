
// loginbutton function

document.getElementById("loginButton").addEventListener("click", function(e){
    e.preventDefault();
    const mobileNumber = 12345678990
    const pin = 2244

    const gotMobileNumber = document.getElementById("mobileNumber").value
    const gotPin = document.getElementById("pin").value
    const mobileNumberValue = parseInt(gotMobileNumber) 
    const pinNumberValue = parseInt(gotPin)

    console.log(mobileNumberValue)
    console.log(pinNumberValue)
})