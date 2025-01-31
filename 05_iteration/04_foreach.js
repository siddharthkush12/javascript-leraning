// Important Loop
//case-1
const prog=["c++","python","java","kotlin"]
prog.forEach(function (item){
    console.log(item);
});
console.log();

//case-2
prog.forEach((item)=>{
    console.log(item);
});
console.log();

//case-3
function print(item){
    console.log(item);
}
prog.forEach(print);

//case-4 (Important)

prog.forEach((item,index,arr)=>{           //function contain arr value,arr index, complete arr
    console.log(item,index,arr);
})
console.log();


//case-5(array of objects)

const mycoding=[
    {
        langName:"javascript",
        langfile:".js"
    },
    {
        langName:"c++",
        langfile:".cpp"
    },
    {
        langName:"python",
        langfile:".py"
    }
];

mycoding.forEach((item)=>{
    console.log(item); 
})
console.log();

mycoding.forEach((item)=>{
    console.log(item.langName); 
})
console.log();



