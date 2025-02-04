const randomColor = function () {
  const hex = "0123456789ABCDEF"; //we need 16 random value
  let color = "#"; //color ex:'#ffffff'
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  return color;
};

let interval1=null;

const startColorChange = function () {
  function bgchange() {
    document.body.style.backgroundColor = randomColor();
  }
  if (interval1===null) {       //(!interval1)
    interval1 = setInterval(bgchange, 1000);
  }
}; 

const stopColorChange = function () {
  clearInterval(interval1);
  interval1 = null;
};

document.getElementById("start").addEventListener("click", startColorChange);
document.getElementById("stop").addEventListener("click", stopColorChange);
