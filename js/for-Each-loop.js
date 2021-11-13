var arr = [1, 5, 0, -4, -2, 7, 10]
var min = arr[0]
arr.forEach(function(elmnt){
    if (elmnt < min) {
        min = elmnt
    }
})
console.log (min)

