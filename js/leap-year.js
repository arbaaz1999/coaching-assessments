var year = 2500
if (year % 100 == 0 && year % 400 == 0) {
    console.log("Given Year is Leap Year")
} else if (year % 4 == 0) {
    console.log("Given Year is a Leap Year")
} else {
    console.log("Given year is Not a Leap Year")
}