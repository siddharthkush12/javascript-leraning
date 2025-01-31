const coding=["js","ruby","java","python","c++"]

const values=coding.forEach((item)=>{
    // console.log(item);               //for-each not return values
})
console.log(values);                // undefined 

//Methods on for-eachloop
// 1)Filter
const num=[1,2,3,4,5,6,7,8,9]
const val=num.filter((num)=>num>5)     //it return array of value of given condition 
console.log(val);
console.log();

//other format of filter

const val2=num.filter((num)=>{          //if we use scope{} then we need to use return 
    return num>5;
})
console.log(val2);


// Push value to other new array(alternate of filter but memory inefficient)

const newarr=[]
num.forEach((val)=>{
    if(val>4){
        newarr.push(val);
    }
})
console.log(newarr);


