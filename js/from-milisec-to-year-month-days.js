var seconds = 12345678911
// var secondsInAYear = 365*24*60*60
// var secondsInAMonth = 30*24*60*60
// var secondsInADay = 24*60*60
// var secondsInAHour = 60*60
// var secondsInAMinute = 60

// var year = parseInt(seconds/secondsInAYear)

// seconds%=secondsInAYear
// var months = parseInt(seconds/secondsInAMonth)

// seconds%=secondsInAMonth
// var days = parseInt(seconds/secondsInADay)

// seconds%=secondsInADay
// var hours = parseInt(seconds/secondsInAHour)

// seconds%=secondsInAHour
// var minutes = parseInt(seconds/secondsInAMinute)

// var extraSeconds = seconds%=secondsInAMinute

// console.log(year, months, days, hours, minutes, extraSeconds)

var extraSeconds = seconds%60
var minutes = parseInt(seconds/60)
var extraMinutes = minutes%60
var hours = parseInt(minutes/60)
var extraHours = hours%24
var days = parseInt(hours/24)
var extraDays = days%30
var months = parseInt(days/30)
var extraMonths = months%12
var years = parseInt(months/12)



console.log(years, "Years", extraMonths, "Months", extraDays, "Days", extraHours, "Hours", extraMinutes, "Minutes", extraSeconds, "Seconds")
