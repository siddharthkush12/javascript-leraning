const userEmail="Siddharthkush12@gmail.com"         
if(userEmail){                              //string treated as true but empty string treated as false 
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}


/* 
    falsy values: false, 0, -0, BigInt(0n), "", null,, undefined, NaN
    truthy values: other values than faley, "0", "false", " ", [], {}, function(){}
*/

//+++++++++++++check arry is empty+++++++++++++
const arr=[]
if(arr.length===0) console.log("empty");

//+++++++++++++check object is empty++++++++++

const obj={}
if(Object.keys(obj).length===0) console.log("empty");



// ++++++++++ Nullish coalescing operator(??): works on null , undefined
//assign first value 
let val1;
val1=5??10;
console.log(val1);
val1=null??10;
console.log(val1);
val1=undefined??10;
console.log(val1);

// Terniary operator

(2<5)?console.log("less"):console.log("more");

