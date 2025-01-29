"use strict";    // treat all JS code as newer version

/*
    number -> 2^53
    bigInt
    string -> ""
    boolean-> true/false
    null   ->standalone value
    undefined
    symbol ->unique
    object
*/ 

let obj={
    sidd:43
}

console.log(typeof 123)
console.log(typeof "jksfdh")
console.log(typeof BigInt(432))
console.log(typeof true)
console.log(typeof undefined)             // return types as "undefined" by default
console.log(typeof obj)
console.log(typeof null)                 //  return type as "object" by default

