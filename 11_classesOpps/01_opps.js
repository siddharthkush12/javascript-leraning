//  1)Object Literals: collection of properties and methods
const user={
    username:"siddharth",
    loginCount:8
}


//Note: "this" keyword means talking about current context
const user2={
    username:"siddharth",
    loginCount:8,
    getUser:function(){
        console.log(`username: ${this.username}`);
        console.log(this);          // complete object
        
    }
}
console.log(user2.getUser());
console.log(this);                  // {} empty in node environment but in browser it has many things
console.log();


// 2)Constructor Function
//"new" keyword is also a constructor function

function userDetail(username,userId,isloggedIn){
    this.username=username;
    this.userId=userId;
    this.isloggedIn=isloggedIn;
    this.greeting=function(){
        log(`welcome ${this.username}`);
    }
    return this;                    //not necesssary to return this
}
const user1=new userDetail("siddharth",11,true);
const user3=new userDetail("kush",14,false);
console.log(user1);
console.log(user3);

console.log(user1 instanceof userDetail);
console.log(user3 instanceof userDetail);


//Note: new keyword generates empty object, constructor function calls,this keyword injects in object,and after that it return values inside object





