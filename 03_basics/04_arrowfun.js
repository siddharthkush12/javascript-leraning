const user={
    username:"siddharth",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
user.username="sam";
// user.welcomeMessage();
console.log(this);                  // return object {}
console.log();

//=========================================

function fun(){
    console.log(this);
}
// fun();

//===============================Arrow function


//Method 1
const fun2=()=>{
    console.log("arrow function");
}
fun2();


const add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(3,4));

//Method 2
const add2=(num1,num2)=> ( num1+num2)      //Implicit return statement
console.log(add2(3,4));

const fun3=()=>({username:"siddharth"})     // for objects
console.log(fun3);

