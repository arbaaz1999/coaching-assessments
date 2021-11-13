/* What is fibonacci series:
-- Sum of first two digits is equal to the third digit.
e.g. 0 1 1 2 3 5 8 13 21.... and so on.
*/

var n1 = 0, n2 = 1, n3
console.log(n1)
console.log(n2)
for (var i = 0; i <= 10; i++) {
    n3 = n1 + n2
    console.log(n3)
    n1 = n2
    n2 = n3
}