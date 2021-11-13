function isPrime(num) {
    var count = 0
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(`${num} is a Prime Number`)
    }
}

var primeCount = 0
