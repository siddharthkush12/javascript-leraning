// Objects can be declared by two methods 1)Literal type,  2)Constructor type

// when object is made as constructor then it is a "singleton" object
// when object is made as literal then it is not a singleton

//A Singleton is an object which can only be instantiated one time, study more in future

// Object.create         //create object as constructor type

// Object as literal--------------

const mysymbol=Symbol("key")

const obj={
    name:"siddharth",
    age:22,
    "full name":"siddharth kushwaha",         // cannot accessby dot use []
    location:"jaipur",
    email:"siddharthkush12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
    [mysymbol]:"kush"                        //symbol in object is made by [] and it is also access by [] not by (.)

}

// Ways to access object(2 ways)

console.log(obj.email);
console.log(obj["email"]);

console.log(obj[mysymbol]);

obj.email="kush12@gmail.com"
console.log(obj.email);

// Object.freeze(obj);                 // Now changes not apply in object because of "Freeze"
obj.email="Sidd@gmail.com"
console.log(obj.email);
console.log(obj);

// Add functions in object

obj.greeting=function(){
    console.log(`hello world ${obj.email}`);
}

console.log(obj.greeting());



