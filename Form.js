function validation(){
    var username  = document.getElementById('username').value;
    var email  = document.getElementById('email').value;
    var password  = document.getElementById('password').value;
    var password2  = document.getElementById('password2').value;
    var pnumber  = document.getElementById('pnumber').value;
    if(username == ""){
        document.getElementById('susername').innerHTML="**Enter Username**";
        return false;
    }
    if(username.length<2){
        document.getElementById('susername').innerHTML="**Enter more than 2 characters**";  
        return false;  
    }
    if(!isNaN(username)){
        document.getElementById("susername").innerHTML="No numbers allowed";
        return false;
    }
    else{
        document.getElementById("susername").innerHTML="";
    }
    


    if(email == ""){
        document.getElementById('semail').innerHTML="**Enter email**";
        return false;
    }
    if(email == " "){
        document.getElementById('semail').innerHTML="Space not allowed";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('semail').innerHTML="Invalid position of @";
        return false;
    }
    if(email.charAt(email.length-4) != '.' && email.charAt(email.length-3)!= '.' ){
        document.getElementById('semail').innerHTML="Invalid position of .";
        return false;
    }
    else{
        document.getElementById('semail').innerHTML="";
    }


    if(password == ""){
        document.getElementById("spassword").innerHTML="**Enter password**";
        return false;
    }
    if(password == " "){
        document.getElementById("spassword").innerHTML="Spaces not allowed";
        return false;
    }
    if(password.length < 8){
        document.getElementById("spassword").innerHTML="Enter minimum 8 characters";
        return false;
    }
    if(password.search(/[0-9]/)== -1){
        document.getElementById("spassword").innerHTML="Add numeric value";
        return false;
    }
    if(password.search(/[a-z]/)== -1){
        document.getElementById("spassword").innerHTML="Add lower case";
        return false;
    }
    if(password.search(/[A-Z]/)== -1){
        document.getElementById("spassword").innerHTML="Add upper case";
        return false;
    }
    if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\-\*\?\{\}]/)== -1){
        document.getElementById("spassword").innerHTML="Add special characters";
        return false;
    }
    else{
        document.getElementById("spassword").innerHTML="";
    }


    if(password2 == ""){
        document.getElementById("spassword2").innerHTML="**Enter password**";
        return false;
    }
    if(password2 == " "){
        document.getElementById("spassword2").innerHTML="Spaces not allowed";
        return false;
    }
    if(password2 != password){
        document.getElementById("spassword2").innerHTML="Password not match";
        return false;
    }
    else{
        document.getElementById("spassword2").innerHTML="";
    }

    if(pnumber == ""){
        document.getElementById("spnumber").innerHTML="**Enter phone number**";
        return false;
    }
    if(pnumber == " "){
        document.getElementById("spnumber").innerHTML="Spaces not allowed";
        return false;
    }
    if(isNaN(pnumber)){
        document.getElementById("spnumber").innerHTML="Enter numbers only";
        return false;
    }
    if(pnumber.length<10 || pnumber.length>10 ) {
        document.getElementById("spnumber").innerHTML="Enter 10 digits phone number";
        return false;
    }
    else{
        document.getElementById("spnumber").innerHTML="";
    }
}