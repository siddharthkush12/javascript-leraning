/*

//Method 1

setInterval(()=>{
    console.log("sidd")
},1000)  

//Method 2
const count=function(str){
    console.log(str);
}
const interval=setInterval(count,1000,"hi");


//To stop interval
clearInterval(interval);

*/
const count=function(str){
    console.log(str);
}
let interval;
document.getElementById('start').addEventListener('click',()=>{
    interval=setInterval(count,100,"siddharth");
});
document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(interval);
})

