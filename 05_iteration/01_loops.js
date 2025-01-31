// For loop

const array=[1,2,3,4]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log();

/*
for(let i=0;i<11;i++){
    console.log(`Outer loop ${i}`);
    for(let j=0;j<11;j++){
        console.log(`Outer loop ${i} and inner loop ${j}`);
    }
}
*/

// Break and continue

const array2=[1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < array2.length; index++) {
    if(array2[index]==7){
        break;
    }
    if(array2[index]==1){
        continue;
    }
    console.log(array2[index]);
}