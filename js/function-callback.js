// function callback 
function firstTenNumber () {
    for (var i = 0; i <= 10; i++) {
        console.log(i)
    }
}

function second (fn) {
    fn()
}

second(firstTenNumber)