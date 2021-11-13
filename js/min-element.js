var arr = [4, 6, 7, 1, 2,-5, -1, 9, 10, -2]
var min = arr[0]
for (var i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i]
    }
}
console.log("Minimum Element is ", min)