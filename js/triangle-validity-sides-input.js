var a = 20
var b = 30
var c = 120
if (a > 0 && b > 0 && c > 0 ) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("Valid Side Triangle")
    } else {
        console.log("Invalid Side Triangle")
    }
} else {
    console.log ("Invalid Side Triangle")
}
