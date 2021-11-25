var arr = [1, 2, 3, 5, 0, 5, 1, 3, 6, -1, 2, -7]
var target = 5
var chunkArr = []
var sorted = arr.sort((a,b)=>{
    if ((b + a) == target) {
        chunkArr.push(a, b)
    }
})
var afterChunk = _.chunk(chunkArr, 2)
console.log (afterChunk)