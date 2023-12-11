///

// https://gorest.co.in/public/v2/users

fetch("https://gorest.co.in/public/v2/users")
  .then((response) => {
    console.log(response);
    const data = response;
    return data;
  })
  .then((data) => console.log(data));
