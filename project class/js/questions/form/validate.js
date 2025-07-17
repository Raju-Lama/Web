function validate() {
    var username = document.getElementById('uname');
    // username from input name="username"
    
    if(username.value.trim().length<4) {
        // trim to remove space
        username.style.border = "solid 1px red";

        alert("Username Should Be at least 4");

        return false;
    }
    else {
        username.style.border = "solid 1px blue";
    }

    const password = document.getElementById('upass');

    var regx = /[0-9][a-zA-Z0-9]*[a-zA-Z0-9][$]/;
    // first letter digit, second can be any last must be $

    if(!regx.test(password.value)) {
        password.style.border = "solid 1px red";
        alert("Password should start with digit and end with $");
        return false;
    }
    else {
        username.style.border = "solid 1px blue";
    }

    var education = document.getElementById('field[]');

    for(var i=0; i<education.length; ++i) {
        if(education[i].checked){
            continue;
        }

        alert("Please Select Your educational field.")
        return false;
    }

    return true;

}