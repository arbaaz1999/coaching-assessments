var sum = 0
var factorial = 1
var x = 2
var n = 4
for (var i = 1; i <= n; i++) {
    var sqr = x ** i
    factorial = factorial * i
    var term = parseFloat(sqr / factorial)
 /*    if (i % 2 == 0) {
        term = term * (-1)
    } */
    console.log(term)
    sum = sum + term
}
console.log("Sum of above series is: ", sum)