"use strict";
// console.log('Hello');

$("form").submit(function(event) {
    event.preventDefault()
});

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
    displayInput();
});



// let firstName = document.getElementById("firstname");
// let lastName = document.getElementById("lastname");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let password_verify = document.getElementById("password_verify");let telephone = document.getElementById("tel");
// let comments = document.getElementById("comments");
