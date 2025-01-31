//---------------------------------For-of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
console.log();

//for of loop in strings
const str="Siddharth"
for(const i of str){
    console.log(i);
}

//for of loop in map
const map=new Map()
map.set('IN','India');
map.set('US','United state of america');
console.log(map);
// for(const key of map){
//     console.log(key);
// }
for (const [key,value] of map) {
    console.log(key,':-',value);
}
console.log();

// for of loop in objects
const obj={
    game1:'NFS',
    game2:'spiderman'
}
// for (const i of obj) {               show error(for of loop not works in object,we use FOR-IN loop)
//     console.log(i);  
// }


//------------------------------------FOR-In loop

//for in loop for objects

const obj2={
    game1:'NFS',
    game2:'spiderman'
}
for (const i in obj) {   
    console.log(i);                 //return keys of objects
}
console.log();
        
for (const i in obj) {   
    console.log(obj2[i]);                 //return values of objects
}        
console.log();


//for in loop in array

const prog=["c++","python","java","kotlin"]
for(const i in prog){
    console.log(i);                     //return index of array
}
for(const i in prog){
    console.log(prog[i]);                     
}


//Notes:- map cannnot iterate by for-in loop
