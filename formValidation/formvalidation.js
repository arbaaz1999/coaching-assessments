// dom API is provided by browser to access the HTML Document.
// console.log () is also an API
// Sir Email ID: suyash@codiotic.com
// id should be unique in a HTML page for Javascript

var inputFirstName = document.getElementById("fName")
var firstNameErr = document.getElementById("nameErr")

var inputLastName = document.getElementById("lName")
var lastNameErr = document.getElementById("lNameErr")

var inputDoB = document.getElementById("dob")
var dOBErr = document.getElementById("dateErr")

var btn = document.getElementById("btn").addEventListener("click", function(event) {
    if (inputFirstName.value == "") {
        firstNameErr.innerText = "Name should Not be Empty"
    } else {
        firstNameErr.innerText = ""
    }
})

