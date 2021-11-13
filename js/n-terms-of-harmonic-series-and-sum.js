var noOfTerms = 10
var sum = 0
for (var i = 1; i <= noOfTerms; i++) {
    var x = parseFloat(1/i)
    sum = sum + x
}
console.log(sum)