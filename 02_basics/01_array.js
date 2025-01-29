const arr=[0,1,2,3,4,5]
arr[0]=3
console.log(arr[0]);
console.log(arr);           // print whole array without loop
console.log();

//  Array methods

arr.push(9)                 // push at last
arr.pop()                   // pop at last
arr.unshift(15)             // push at first(increase time complexity)
console.log(arr);
arr.shift()                 // delete from first
console.log(arr);
console.log(typeof arr);    // object
console.log();

//**********************
const arr2=arr.join()           //transform the complete array to string
console.log(arr2);              // looks like array but it is string
console.log(typeof arr2);    // string
console.log();






//*************************   Slice and Splice(Interview question)  ************

const newarr=[0,1,2,3,4,5,6,7,8]
console.log(newarr);
console.log();

const newarr2=newarr.slice(1,3);
console.log(newarr2);                   // 1,2
console.log(newarr);                    // original array still same***
console.log();

const newarr3=newarr.splice(1,3);
console.log(newarr3);                   // 1,2,3
console.log(newarr);                    // original array newarr changed and newarr is now [0,4,5,6,7,8]

