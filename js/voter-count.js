var voter = [12, 15, 11, 20, 25, 30, 17, 14, 5]
var above_18 = 0
var below_18 = 0
for (var i = 0; i < voter.length; i++) {
    if (voter[i] >= 18) {
        above_18++
    } else {
        below_18++
    }
}
console.log("Total No. fo voters are: ", above_18)
console.log("Total No. of Non Voters are: ", below_18)