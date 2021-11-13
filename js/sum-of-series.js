var factorial = 1
var noOfTerms = parseInt(5*2)
var x = 2
var sum = 0
for (var i = 2; i <= noOfTerms; i+=2) {
    factorial = factorial * i
    var y = parseInt(x**i)
    var z = parseFloat(y/factorial)
    sum = sum + z
}
sum = 1 - sum
console.log(`No. of Terms: ${noOfTerms}\nValue of x: ${x}\nSum of the given Series = ${sum}`)