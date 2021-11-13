var station = {
    "GP": {
        dist: 0,
        prev: "",
        next: "CNC",
    },
    "CNC": {
        dist: 2,
        prev: "GP",
        next: "GC",
    },
    "GC": {
        dist: 3,
        prev: "CNC",
        next: "TM"
    },
    "TM":{
        dist: 4,
        prev: "GC",
        next: "GBS",
    },
    "GBS":{
        dist: 5,
        prev: "TM",
        next: "RM",
    },
    "RM":{
        dist: 10,
        prev: "GBS",
        next: "",
    },
};

var src = "GP"
var dest = "CNC"

var srcInfo = station[src]
var destInfo = station[dest]

var travelDistance = destInfo.dist - srcInfo.dist

travelDistance = travelDistance < 0 ? -1 * travelDistance : travelDistance

var isContigious = srcInfo.next == dest || srcInfo.prev == dest

var fare = 0

if(isContigious || travelDistance <= 3) {
    fare = 5
} else {
    fare = 5
    var additionalDistance = travelDistance - 3
    fare += additionalDistance * 1.5
}

console.log(`From: ${src}\nTo: ${dest}\nTotal Distance: ${travelDistance}\nFare: ${fare}`)