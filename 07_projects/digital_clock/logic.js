const box=document.getElementById('time');
// const box=document.querySelector('#time');
setInterval(function(){
    let date=new Date();
    box.innerHTML=date.toLocaleTimeString("en-us",{hour12:true});
},1000)
