//Method-1


const promise1 = new Promise(function (resolve, reject) {
  //contain two parameters
  //Do an async task
  //DB calls, cryptographt, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve(); // It call then(Line no-10)
  }, 1000);
});

promise1.then(() => {
  console.log("Promice confirmed");
  console.log();
});



//Method-2

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async 2 resolved");
  console.log();
});


//Method-3

const promice3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "siddharth", email: "siddharthkush12@gmail.com" });
  }, 3000);
});
promice3.then(function (user) {
  console.log(user);
  console.log();
});

//Method-4


const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "siddharth", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 4000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
    console.log();
  });
  
//Method-5


const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "12345" });
    } else {
      reject("Error : Something Went Wrong");
    }
  }, 5000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();
