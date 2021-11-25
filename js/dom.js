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

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var errMsg = document.getElementById("errtxt")
var input = document.getElementById("inp")

var btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    if (input.value.length == "") {
        errMsg.innerText = "This Field is required"
    } else {
        errMsg.innerText = ""
    }
    /* if (paraText == "Hello") {
        para.innerText = "Bye"
    } else {
        para.innerText = "Hello"
    } */
})
/* var sec = 0
setInterval(function () {
    console.log(sec)
    sec++
}, 1000) */