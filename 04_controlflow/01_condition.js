//  If-else
if(2=="2") console.log("Executed");     //implicit scope
else console.log("Not");

if(2==="2") console.log("Executed");         //Strinctly equal check datatypes also
else console.log("Not");

// if else if

if(10<3){
    console.log("1");
}
else if(5<30){
    console.log("2");
}
else{
    console.log("3")
}


// Switch

const month=4;
switch (month) {
    case 1:
        console.log("January");
        break;
    case "siddharth":
        console.log("January");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("dec");
        break;
}

