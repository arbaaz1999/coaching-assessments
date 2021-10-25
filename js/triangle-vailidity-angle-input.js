var angle1 = 30
var angle2 = 30
var angle3 = 120
var allAngleSum = angle1 + angle2 + angle3
if (allAngleSum == 180 ) {
    if (angle1 + angle2 > angle3 && angle2 + angle3 > angle1 && angle3 + angle1 > angle2) {
        console.log("Valid Angle Triangle")
    } else {
        console.log("Invalid Angle Triangle")
    }
} else {
    console.log ("Invalid Angle Triangle")
}
