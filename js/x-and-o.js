var arr = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]
var countofX = 0
var countofO = 0
var countX = arr.forEach((el) => {
    if (el == "x") {
        countofX ++
    }
    if (el == "o") {
        countofO++
    }
})
console.log(countofX, countofO)
var diff = Math.abs(countofX - countofO)

var winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
if ((countofX - countofO == 1) || (countofO - countofX == 1)) {
    arr.forEach((el, indx) => {
        winningPosition.forEach((e, ind) => {
            e.forEach((num) => {

            })
        })
    })
}