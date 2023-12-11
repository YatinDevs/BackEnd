/*
  - Asynchronous callbacks are not executed immediately 
  after the completion of the corresponding function.
  They are scheduled to run after some asynchronous 
  operation completes.
 
  -They are often used with operations like I/O tasks,
   network requests, or timers, where the result is not
   immediately available.
  
  - The callback function is passed as an argument and
   is invoked once the asynchronous task is finished.

*/
// https://gorest.co.in/public/v2/users

// Case 1: Asynchronous Callback with Network Request
// (Using Fetch API):

function fetchDatafromAPI(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      callback(data);
    })
    .catch((err) => {
      console.log("Error Fetching data", err);
    });
}

const apiURL = "https://dummyjson.com/users";

fetchDatafromAPI(apiURL, displayUI);

function displayUI(resdata) {
  console.log("Network Request Sucessful", resdata);

  const divUI = document.querySelector(".displayUI");
  const users = resdata.users;
  console.log(users);
  users.map((user, idx) => {
    divUI.innerHTML += `
      <div class="user">
        <p>UserId : ${user.id}</p>
        <p>FirstName : ${user.firstName}</p>
        <p>LastName : ${user.lastName}</p>
        <p>Age : ${user.age}</p>
      </div>`;
  });
}

// Case 2 :Asynchronous Callback with Timer (Using setTimeout):

function delayedOperation(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

delayedOperation(() => {
  console.log("Callback executed after delay");
});
