const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

marvel.push(dc);
console.log(marvel);            // push method create dc array inside marvel i.e 2D array 
console.log();


const marvel2=["thor","ironman","spiderman"]
const all=marvel2.concat(dc);        // "concat" always return array  
console.log(all);               
console.log();

const allhero=[...marvel2, ...dc]   //"Concat spread operator"// same as concat but better than concat
console.log(allhero);               
console.log();


const arr=[1,2,3,4,[5,6,[7,8,9]]]
const resArray=arr.flat(Infinity);       // flat convert x-Dimension array to 1D array(concat all subarry into new array)
console.log(resArray);
console.log();

 
// other operator

console.log(Array.isArray("siddharth"));
console.log(Array.from("siddharth"));         // convert to array
console.log();

let names="kushwaha"                          // conver string to array
const a=Array.from(names);
console.log(a);
console.log();

//make array from variable
let s1=100,s2=400,s3=200;
console.log(Array.of(s1,s2,s3));         // make array of varibles










 