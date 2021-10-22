var costPrice = 10
var sellPrice = 15
var isFriend = false
var shouldISell = isFriend ? console.log("I Should Sell") : (costPrice < sellPrice ? console.log("I Should Sell"): console.log("I Should Not Sell"))
