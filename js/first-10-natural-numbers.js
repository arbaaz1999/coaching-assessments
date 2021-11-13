var sum = 0
for (var i = 1; i <= 10; i++) {
    var n = parseInt(prompt("Enter 10 Natural Numbers"))
    sum+=n
    console.log(n)
}

var average = sum /10
console.log(`Sum = ${sum}\nAverage = ${average}`)