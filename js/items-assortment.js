var sortDir = "DESC"
var items = [
    { name: "c", price: 50, cat: "Health" },
    { name: "d", price: 109, cat: "Food" },
    { name: "a", price: 10, cat: "Perfume" },
    { name: "b", price: 30, cat: "Perfume" },
    { name: "c", price: 5, cat: "Health" },
    { name: "d", price: 19, cat: "Health" },
]

var sorted  = items.sort((a, b) => {
    if (sortDir == "ASC") {
        return a.price - b.price
    } else if (sortDir == "DESC") {
        return b.price - a.price
    } else {
        return 0
    }
})

function isCatexist (arr, catName) {
    var isExist = false
    arr.forEach(function (elmnt) {
        if (elmnt.categoryName == catName) {
            isExist = true
        }
    })
    return isExist
}

function getCatIndex (arr, catName) {
    var index = -1
    arr.forEach(function(el, i) {
        if (el.categoryName == catName) {
            index = i
        }
    })
    return index
}

var category = []
items.forEach(function(el) {
    if(!isCatexist(category, el.cat)){
        category.push({categoryName: el.cat, count: 1, minPrice: el.price, maxPrice: el.price})
    } else {
        var ind = getCatIndex(category, el.cat)
        var existingPrice = el.price
        var currentMinPrice = category[ind].minPrice
        var currentMaxPrice = category[ind].maxPrice

        if (existingPrice < currentMinPrice) {
            category[ind].minPrice = existingPrice
        }

        if (existingPrice > currentMaxPrice) {
            category[ind].maxPrice = existingPrice
        }

        category[ind].count = category[ind].count + 1                
    }
})
console.log(category)
