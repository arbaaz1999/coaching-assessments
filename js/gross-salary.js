var basicSalary = parseInt(prompt("Enter Your Basic Salary"))
var grossSalary
if (basicSalary <= 10000) {
    grossSalary = basicSalary + parseFloat(basicSalary*20/100) + parseFloat(basicSalary*80/100)
    console.log(`Basic Salary: ${basicSalary}\nHRA: 20%\nDA: 80%\nTotal Gross Salary: ${grossSalary}`)
} else if (basicSalary > 10000 && basicSalary <= 20000) {
    grossSalary = basicSalary + parseFloat(basicSalary*25/100) + parseFloat(basicSalary*90/100)
    console.log(`Basic Salary: ${basicSalary}\nHRA: 25%\nDA: 90%\nTotal Gross Salary: ${grossSalary}`)
} else {
    grossSalary = basicSalary + parseFloat(basicSalary*30/100) + parseFloat(basicSalary*95/100)
    console.log(`Basic Salary: ${basicSalary}\nHRA: 30%\nDA: 95%\nTotal Gross Salary: ${grossSalary}`)
}