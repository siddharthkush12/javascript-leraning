/*
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //response is retuned as string so to make it as json
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUser();
*/


//Method 2

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });



//Note:- fetch creates microtask queue (high priority (result at first))