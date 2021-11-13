var sum = 0
var factorial = 1
var num1 = 1
var num2 = 2
for (var i = num1; i <= num2; i++) {
    var sqr = i**2
    for (var j = 1; j <= sqr; j++) {
        factorial *= j
    }
    sum = sum + factorial
}
console.log(sum)