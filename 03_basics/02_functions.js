//-------------------Rest and spread operator

function calculateCart(...num){        // ...(rest operator) return array of all passed values
    return num;
}
console.log(calculateCart(200,300,500));            //  create array of passed multiple values


function calculateCart(num1,num2,...num){
    return num;
}
console.log(calculateCart(200,300,500,1000));   //num1=200,num2=300,num=[500,1000]
console.log();

//-----------------Passing Objects in function

const obj={
    user:"sidd",
    price:100
}
function fun(myObj){
    console.log(`user is ${myObj.user} and price is ${myObj.price}`);
}
fun(obj);
fun({                       //other method to pass object
    user:"Ram",
    price:50
})
console.log();



//-----------------passing Arrays in functions

const arr=[100,200,300]
function returnSec(arr2){
    return arr2[1];
}
console.log(returnSec(arr));
console.log(returnSec([100,200,300]));