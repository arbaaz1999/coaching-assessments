function calc(num1, num2, opt) {
    switch (opt) {
        case '+': return num1 + num2
            break
        case '-': return num1 - num2
            break
        case '*': return num1 * num2
            break
        case '/': return num1 / num2
            break
        case '%': return num1 % num2
            break
        default: return NaN
    } //end of switch case
} // end of a function

/* var n1 = parseInt(prompt("Enter a Number 1"))
var n2 = parseInt(prompt("Enter a Number 2"))
var operation = prompt("Which Operation") */


console.log(calc(10, 5, '-')) //function calling

