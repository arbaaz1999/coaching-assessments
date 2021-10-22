var htmlMarks = parseFloat(50)
var cssMarks = parseFloat(45)
var jsMarks = parseFloat(40)
var totalMarks = parseFloat(htmlMarks + cssMarks + jsMarks)
var percentage = parseFloat(totalMarks/3)
console.log(`Total Mark: ${totalMarks} / 300`)
console.log(`Percentage: ${percentage}`)
if(percentage >= 90 && percentage <= 100) {
    console.log ("You got Grade A")
} else if (percentage >= 70 && percentage < 90) {
    console.log("You Got Grade B")
} else if (percentage >= 50 && percentage < 70) {
    console.log("You Got Grade C")
} else if (percentage >= 33 && percentage < 50) {
    console.log("You Got Grade D")
} else {
    console.log("FAILED! Repeat Again")
}
