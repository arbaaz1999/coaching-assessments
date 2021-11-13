var from = 0
var upto = 30
var noOfPrime = 0
for (var num = from; num <= upto; num++){
    var count = 0
    for (var i = 0 ; i <= num; i++) {
        if(num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(`${num} is a Prime Number`)
        noOfPrime++
    }
}
console.log(`Total No. of Prime Numbers from ${from} to ${upto} are ${noOfPrime}`)