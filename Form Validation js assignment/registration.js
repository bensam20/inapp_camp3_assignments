function checkForBlank(val, errorField, msg){
    if(document.getElementById(val).value == ''){
        document.getElementById(val).style.borderColor= '#ff6161';
        document.getElementById(errorField).innerText = msg;
    }
    return;
}

function checkPhno(){
    var phnum = document.getElementById('phno').value;
    if(phnum.length != 10){
        document.getElementById('phno_error').innerText = 'Please Enter 10 digits';
    }
    else{
        document.getElementById('phno_error').innerText = '';
    }
}


function validate() {
    checkForBlank('fname','fname_error','Enter Full Name');
    checkForBlank('email','email_error','Enter your Email address');
    checkForBlank('phno','phno_error','Enter Phone Number');
    checkForBlank('password','password_error','Enter Password');
    checkForBlank('confpass','confpass_error','Confirm your password');
    checkPhno();
}
