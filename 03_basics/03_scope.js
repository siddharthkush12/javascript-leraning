// Scope: {}
//--------Nested scope->child function can access parent varible but vice versa not true

function one(){
    const username="sidd";
    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);                outer fun cannot access inside scope
    two();
}
one();


// -------------------------scope in function(intresting)---------------

//M-1
addOne(5);                         // It will execute with no error if we call function before making that function
function addOne(num){
    return num+5;
}

//M-2
// addOne(9);                    // In this method we cant call function before function decleration
const addTwo=function(num){
    return num+9;
}
addOne(9);

//--------------------------------------------------------
