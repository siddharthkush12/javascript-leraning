// Remove images
//Method-1
/*
document.getElementById('images').addEventListener('click',function(e){
    let removeIt=e.target.parentNode;
    removeIt.remove();         //Method 1   
//  removeIt.parentNode.removeChild(removeIt);     Method 2; 
},false);
*/
//But when click outside image it delete complete list

//Method-2 (tagName)

document.getElementById('images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        let removeIt=e.target.parentNode;
        removeIt.remove();
    }

},false);



