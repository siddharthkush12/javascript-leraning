const score=400
console.log(score);                 // 400 only
console.log()


const score2=new Number(100)
console.log(score2);               // [Number: 100]
console.log()


console.log(score2.toFixed(2))    // fixed decimals
const num=23.28911
console.log(num.toFixed(2))         //23.29
console.log(num.toPrecision(2))     //23
console.log()


const hundreds=1000000
console.log(hundreds.toLocaleString())      // by default US number
console.log(hundreds.toLocaleString('en-IN'))      // Indian version
console.log()


console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log()


console.log("++++++++++++ Maths Library ++++++++++++")
// ++++++++++++++++++++++++++ Maths Library ++++++++++++++++++++
console.log()



console.log(Math.abs(-2))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2));          // greater than 4
console.log(Math.floor(4.9));         // lower value or value before decimal
// min,max,sqrt,pow also there

console.log(Math.random())            // value b/w 0-1
console.log((Math.floor(Math.random()*10)+1))

// Random value in range
const mn=10,mx=20
const res=Math.floor(Math.random()*(mx-mn+1))+mn    //formula to get random number between min and max or required range
console.log(res)



