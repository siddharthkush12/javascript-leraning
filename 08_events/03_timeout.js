//Timeout()

//Method-1
setTimeout(function(){
    console.log("siddharth");
},2000)         //show console after 2 sec

//Method-2
const changeText=function(){
    document.querySelector('h1').innerHTML="TimeOut ho gya";
}
// setTimeout(changeText,2000);


//To stop timer

const changeMe=setTimeout(changeText,2000);
document.getElementById('stop').addEventListener('click',function(e){
    clearTimeout(changeMe);
    console.log('stop');
})