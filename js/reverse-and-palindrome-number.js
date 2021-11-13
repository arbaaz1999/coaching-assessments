/* Program to reversing a Number and to check whether it is palindrome or not:
1. What is Palindrome?
--> Number when reverse, it should be same as original number.
e.g. 121, 151, 464, etc.
*/

var n = 151
var rev = 0
var r = 0
var m = n
while(n != 0) {
    r = parseInt(n%10)
    n = parseInt(n/10)
    rev = parseInt(rev*10 + r)
}
console.log(rev)

if (m==rev) {
    console.log("Number is Palindrome")
} else {
    console.log("Not Palindrome")
}