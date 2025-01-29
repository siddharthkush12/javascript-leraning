let date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(typeof date);                //   object
console.log();

let otherDate=new Date(2002, 1, 2)
console.log(otherDate.toDateString());

let oD2=new Date(2002, 1, 2 ,7 ,3 ,14)
console.log(oD2.toLocaleString());

let oD3=new Date("2024-01-14")
console.log(oD3.toLocaleString());

let oD4=new Date("11-14-2024")
console.log(oD4.toLocaleString());    


let mytime=Date.now()
console.log(mytime);
console.log(oD4.getTime());
console.log();

console.log(Math.floor(Date.now()/1000));      // Seconds 


let date2=new Date()
console.log(date2.getDate());      // getyear,gettime etc
console.log(date2.getMonth()+1);     



// Important 
console.log(date.toLocaleString('default',{
    weekday:"long"
}))






