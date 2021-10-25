var a = 6
var b = 7
var c = 10
if (a > 0 && b > 0 && c > 0 ) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("Valid Side Triangle")
        if (a == b && b == c) {
            console.log("Equilateral Triangle")
        } else if (a !=b && b != c && c !=a) {
            console.log ("Scalen Triangle")
        } else if (a == b || b == c || c == a) {
            console.log ("Isoceles Triangle")
        }
    } else {
        console.log("Invalid Side Triangle")
    }
} else {
    console.log ("Invalid Side Triangle")
}
