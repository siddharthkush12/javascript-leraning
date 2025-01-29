// " " and ' ' are same in js strings representation
let name="siddharth"
let count=50
console.log(name+count+" value")     // old method

//  String Interpolation (``)        // Modern Method
console.log(`hello my name is ${name} and my repo count is${count}`)  


// another way to declare a strong as an object
const str=new String("siddhart")


console.log(str.__proto__)    // {}
console.log(str.length)
console.log(str.toUpperCase())      // not change the original state
console.log(str.charAt(3))
console.log(str.indexOf('d'))
console.log(str.substring(0,4))    // negative index not allowed
console.log(str.slice(-6,7))        // negative value allowed

let str1="      sidd   "
console.log(str1.trim())            // remove space

let str2="https://sidhaerh/siddhart%23kushwa"
console.log(str2.replace('%23','-'))
console.log(str2.includes('s'))

console.log(str2.split('%'));
