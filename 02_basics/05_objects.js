const course={
    courseName:"javascript",
    price:"999",
    courseInstructor:"sidd"
}


const {courseInstructor}=course     //after that sont need to write course.corseInstructor just access by couseInstructor
console.log(courseInstructor);   

// ---------------object destructure--------------

const {courseInstructor: cInst}=course      // access just by cInst (this is called object de-structure)
console.log(cInst);

// ------------------------------------------------

//------------------how API looks like?--------------------

//type1
/*
{
    "name":"Siddharth",             //In form of objects
    "class":"Btech"
}
*/
//type2
[
    {},
    {},                            //In form of array
    {}
]