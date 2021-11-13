var temp = ""
do {
    var str = prompt("Enter Data")
    if (str != '#') {
        temp += str
    }
} while(str!='#')
alert(`Thank You ${temp}`)