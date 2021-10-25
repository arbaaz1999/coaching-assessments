var amount = 10999
var Notes2000 = parseInt(amount/2000)
var after2000 = amount%2000
var Notes500 = parseInt(after2000/500)
var after500 = after2000%500
var Notes200 = parseInt(after500/200)
var after200 = after500%200
var Notes100 = parseInt(after200/100)
var after100 = after200%100
var Notes50 = parseInt(after100/50)
var after50 = after100%50
var Notes20 = parseInt(after50/20)
var after20 = after50%20
var Notes10 = parseInt(after20/10)
var after10 = after20%10
var coin_5 = parseInt(after10/5)
var after_5 = after10%5
var coin_2 = parseInt(after_5/2)
var after_2 = after_5%2
var coin_1 = parseInt(after_2/1)

console.log(`2000 x ${Notes2000}\n500 x ${Notes500}\n200 x ${Notes200}\n100 x ${Notes100}\n50 x ${Notes50}\n 20 x ${Notes20}\n10 x ${Notes10}\n5 x ${coin_5}\n2 x ${coin_2}\n1 x ${coin_1}`)