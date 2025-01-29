const accountId=3434234
let accountEmail="siddharthkush12@gmail.com"         // scoped variable 
var accountPass=213423                               
accountCity="jaipur"                        
let accountState;                                      // undefined variable


// accountId=434242                 // Not allowed because of constant
console.log(accountId)

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/