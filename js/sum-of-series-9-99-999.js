var noOfTerms = 10
var t = 9
var sum = 0
for (var i = 1; i <= noOfTerms; i++) {
    sum += t
    console.log(t)
    t = t*10+9
}
console.log(`Sum of given series = ${sum}`)