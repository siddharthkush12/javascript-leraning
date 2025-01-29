/*  primitive datatype: 7 types
    string, Number, BigInt, Boolean, null, undefined, Symbol(make any value to unique)
*/

/*  Reference (Non primitive)
    Arrays, Object, Function
*/


let char=344324234324234n
console.log(typeof char)     // BigInt 


//************************************** Memory allocation in JavaScript

/*  Memory in js
    1) Stack(Primitive) -> it return the copy of variable

    let firstName="siddharth kush"
    let lastName=firstName              // as it stored in stack memory     so it is stored in stack with a copy so it not changed after changing the variable lastName.

    consolse.log(firstName)
    console.log(lastName)
    lastName="Kush"
    consolse.log(firstName)
    console.log(lastName)

    2) Heap(Non-primitive) ->it return the reference of variable

    let userOne={
    email:"Siddharthkush12@gmail.com"
    }
    let userTwo=userOne
    userTwo.email="Kush123@gmail.com"          // as it is stored in heap so it take reference of UserOne and if we change UserTwo the userOne is also changed
    console.log(userOne.email)

*/

let firstName="siddharth kush"
let lastName=firstName              // as it stored in stack memory     so it is stored in stack with a copy so it not changed after changing the variable lastName.   
console.log(firstName)
console.log(lastName)
console.log()
lastName="Kush"
console.log(firstName)
console.log(lastName)
console.log()



let userOne={
    email:"Siddharthkush12@gmail.com"
}
let userTwo=userOne
userTwo.email="Kush123@gmail.com"          // as it is stored in heap so it take reference of UserOne and if we change UserTwo the userOne is also changed
console.log(userOne.email)
