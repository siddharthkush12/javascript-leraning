const form = document.querySelector("form");

// const height=parseInt(document.querySelector('#height').value);   // this usecase will give you empty value

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    res.innerHTML = "Please Enter a valid height";
  } 
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    res.innerHTML = "Please Enter a valid weight";
  } 
  else {
    const val = (weight / ((height * height) / 10000)).toFixed(2);
    res.innerHTML = `<span>${val}</span>`;
    if(val<=18.6){
        res.style.backgroundColor="rgb(208, 111, 111)";
    }
    else if(val>18.6&&val<=24.9){
        res.style.backgroundColor="rgb(47, 255, 0)";
    }
    else{
        res.style.backgroundColor="red";
    }
  }

});
