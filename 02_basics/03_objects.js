// Objects can be declared by two methods 1)Literal type,  2)Constructor type

// when object is made as constructor then it is a "singleton" object
// when object is made as literal then it is not a singleton

//A Singleton is an object which can only be instantiated one time, study more in future

// Object.create         //create object as constructor type

// Object as literal--------------

const obj={
    name:"siddharth",
    age:22,
    location:"jaipur",
    email:"siddharthkush12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// Ways to access object(2 ways)

console.log(obj.email);
console.log(obj["email"]);


