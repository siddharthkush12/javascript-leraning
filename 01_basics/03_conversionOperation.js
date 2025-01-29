let score="33"
console.log(typeof (score))
let num=Number(score)
console.log(typeof num)
console.log(num)
console.log()


let score2="11aa"
let num2=Number(score2)
console.log(typeof num2)
console.log(num2)                 // NaN because it is 11aa but its type is treated as number
console.log()


let score3=null
console.log(typeof score3)
console.log(score3)                 // 0
console.log()

let score4=true
console.log(typeof score4)
console.log(score4)                 // 1
console.log()

let score5=undefined
console.log(typeof score5)
console.log(score5)                 // NaN
console.log()


let score7="sdafas"
let res=Boolean(score7)      // 0->false; 1, all other numbers->true
console.log(res)             // ""->false;  "any char or string"->true   