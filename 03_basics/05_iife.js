// Immediately Invoked Function Expressions(IIFE)

// syntax -> ()()

// Method 1
(function fun(){                    // Named IIFE
    console.log("Db connect");
})();                   // semicolon is necessary

//Method 2
(()=>{
    console.log("DB connect 2");
})();
console.log();

((name)=>{
    console.log(`DB 3 connects ${name}`);
})('siddharth');



// function immediately execute is called ifee, iife used because of pollution of global scope variable