"use strict";
// console.log('Hello');
$("form").submit(function(event) {
    event.preventDefault()
});

function clearInput() {
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#password").val("");
    $("#password_verify").val("");
    $("#tel").val("");
    $("#comments").val("");
}

function validate(password, password_verify) {
    if ((password === password_verify) && (password !== "")) {
        return true;
    }  else  {
        return false;
    }
}

function displayInput() {
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let password_verify = $("#password_verify").val();
    let telephone = $("#tel").val();
    let comments = $("#comments").val();
    
    let output = 
    `<h4>Form Output</h4>
    <p>First Name: ${firstname}</p>
    <p>Last Name: ${lastname}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    <p>Password Verify: ${password_verify}</p>
    <p>Tel: ${telephone}</p>
    <p>Comments: ${comments}</p>`

    $("#display").html("");
    $("#display").html(output);
}


$("#submit").click(function() {
    if (validate($("#password").val(),$("#password_verify").val())) {
        displayInput();
        clearInput();
    }  else  {
        $("#flash").html("<h3>Both password fields should be filled in correctly.</h3>")
    }
});
