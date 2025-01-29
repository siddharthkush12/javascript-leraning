// const user=new Object()       //singleton object

const regularUser={
    email:"siddharth@gmail.com",
    fullname:{
        userfullname:{
            firstName:"siddharth",      // Nested object
            lastName:"Kushwaha"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);
console.log(regularUser.fullname?.userfullname.firstName);      //optional chaining'
console.log();


//-------------------Merge two Objects--------------

//  1) Method-1
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2};
console.log(obj3);         // it create object inside object instead of merging
console.log();

//   2) Method-2
obj4=Object.assign({},obj1,obj2); // "assign will merge the objects" and result goest to new object {} if we use(obj1,obj2) then all result/merge goes to obj1
console.log(obj4);       
console.log();             
// obj4=Object.assign(obj1,obj2);     //also true but result save on obj1 also


//  3) method-3
const obj5={...obj1,...obj2}
console.log(obj5);


//-------------------- Important method for values from database------------

console.log(Object.keys(obj1));         // return array of keys of object
console.log(Object.values(obj1));         // return array of values of object
console.log(Object.entries(obj1));         // return array of array of keys and value-> [[key,value],[key,value]]
console.log(obj1.hasOwnProperty('1'));      // true if key is present in object
