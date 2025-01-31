const coding=["js","ruby","java","python","c++"]

const values=coding.forEach((item)=>{
    // console.log(item);               //for-each not return values if we return in forEach loop then it give undefined
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


// 2) Map

const numbers=[1,2,3,4,5,6,7,8,9,10]
const newNum=numbers.map((num)=> num + 10)          // map is also return type
console.log(newNum);

//other way for map(with return)

const newNum2=numbers.map((num)=>{
    return num+10;
})          
console.log(newNum);
console.log();



//---------------------Chaining

const newNumbers=numbers
    .map((num)=> num*10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)
console.log(newNumbers);
console.log();

// 3) -------------------Reduce

const mynum=[1,2,3]

const mtTotal=mynum.reduce((acc,currval)=>{
    return acc+currval;
},0)                        // starting accumulator value =0

console.log(mtTotal);
console.log();


// other way to use reduce method
//           ======
const abc=mynum.reduce(function(acc,currval){           //method 1
    return acc+currval;                 
},0)

const abc2=mynum.reduce((acc,currval)=>acc+currval ,0)  //method 2


// Example of reduce method

const shoppingCart=[
    {
        itemName:"js course",
        price:3000
    },
    {
        itemName:"python course",
        price:3000
    },
    {
        itemName:"datascience course",
        price:3000
    },
    {
        itemName:"web-dev course",
        price:3000
    }
]
const total=shoppingCart.reduce((acc, item)=> acc+item.price ,0)
console.log(total);
