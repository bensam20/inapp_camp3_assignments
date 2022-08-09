function validate() {
    if(document.getElementById('fname').value == ''){
        let res = 'Enter Full Name';
        document.getElementById('fname_error').innerText = res;
    }
    if(document.getElementById('email').value == ''){
        let res = 'Enter your Email address';
        document.getElementById('email_error').innerText = res;
    }
    if(document.getElementById('phno').value == ''){
        let res = 'Enter Phone Number';
        document.getElementById('phno_error').innerText = res;
    }
    if(document.getElementById('password').value == ''){
        let res = 'Enter Password';
        document.getElementById('password_error').innerText = res;
    }
    if(document.getElementById('confpass').value == ''){
        let res = 'Confirm your password';
        document.getElementById('confpass_error').innerText = res;
    }
    var phnum = document.getElementById('phno').value;
    if(phnum.length != 10){
        document.getElementById('phno_error').innerText = 'Please Enter 10 digits';
    }
    else{
        document.getElementById('phno_error').innerText = '';
    }
}