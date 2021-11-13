var station = [
    {name: "A", dist: 0},
    {name: "B", dist: 1},
    {name: "C", dist: 2},
    {name: "D", dist: 5},
    {name: "E", dist: 9},
    {name: "F", dist: 14},
    {name: "G", dist: 20},
]

var src = "G"
var dest = "D"

for (var i = 0; i < station.length; i++) {
    if (station[i].name == src) {
        var srcIndex = i
    }
    if (station[i].name == dest) {
        var destIndex = i
    }
}
console.log(srcIndex, destIndex)

var totalDistance = station[srcIndex].dist - station[destIndex].dist

(totalDistance < 0) ? Math.abs(totalDistance) : totalDistance

console.log(`Total Distance = ${totalDistance}`)

var isContigious = (srcIndex - destIndex == 1) || (srcIndex - destIndex == -1)

if(!isContigious || totalDistance > 3) {
    var fare = 5
    fare = parseFloat((totalDistance - 3) * 1.5)
    console.log(fare)
} else {
    console.log("Fare is: Rs. 5.00")
}