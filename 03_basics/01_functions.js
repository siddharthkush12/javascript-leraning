function fun1(){
    console.log("Hi i am function");
}

fun1();

//Function to add two numbers
function add(num1,num2){              //num1,num2 are paramaters
    console.log(num1+num2);
}
add(3,4);                               // 3,4 are arguments


// Method 2(return type) 
function add2(num1,num2){
    return num1+num2;
}
const res=add2(3,4);
console.log(res);


//Note 1:  if actual parameter is not given then it return undefined
function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage());        // "undefined just logged in" as output
console.log();


// Default value in parameter
function loginUserMessage2(username="sidd"){
    return `${username} just logged in`;
}
console.log(loginUserMessage2()); 


