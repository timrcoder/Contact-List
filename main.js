function check(){
    let userName = document.getElementById("userName")
    let userEmail = document.getElementById("userEmail")
    let userPhone = document.getElementById("userPhone")
    let userMessage= document.getElementById("userMessage")

    document.getElementById("userNameOutput").innerHTML = userName.value;
    document.getElementById("userEmailOutput").innerHTML = userEmail.value;
    document.getElementById("userPhoneOutput").innerHTML = userPhone.value;
    document.getElementById("userMessageOutput").innerHTML = userMessage.value;

}
