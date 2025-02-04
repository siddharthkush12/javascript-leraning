// Method 1(less features)
/*
const owl=document.getElementById('owl');
owl.onclick=function(){
    alert("owl clicked");
}
*/

//Method 2(best);
document.getElementById('owl').addEventListener('click',function(e){
    alert("owl clicked");
    
});

// Important :-
// type, timestamp, defaultPrevented,
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


//Capturing and Bubbling
// bubbling(inner to outer)-false(by default false)
//capturing(outer to inner || top to bottom)-true

document.getElementById('images').addEventListener('click',function(e){
    console.log("clicked inside the ol");
},false);     //default false

document.getElementById('horse').addEventListener('click',function(e){
    console.log("horse clicked");
    e.stopPropagation();  //after bubbling event not goes to up(stop bubbling)
},false);


document.getElementById('google').addEventListener('click',function(e){
    console.log('google clicked');
    e.preventDefault();
    e.stopPropagation();        //stop bubbling
},false);





