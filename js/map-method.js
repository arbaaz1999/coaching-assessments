var arr = [26, 20, 18, 17, 16, 50,]

var voter = arr.map(function (el, indx, ari) {
    if (el >= 18) {
        return "Voter"
    } else {
        return "Non Voter"
    }
})

console.log(voter)

var voter = []
var nonVoter = []

arr.forEach(function (elmnt) {
    if (elmnt >= 18) {
        voter.push[elmnt]
    } else {
        nonVoter.push[elmnt]
    }
})
console.log(voter, nonVoter)