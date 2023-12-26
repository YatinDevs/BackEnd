const http = require("http");
const fs = require("fs");
// consider data variable
// const data = { age: 23 };
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// console.log(products);

// Creating an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("server started");

  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const prd = products.find((p) => p.id === +id);
    console.log(prd);
    res.setHeader("Content-Type", "text/html");
    let ModifiedIndex = index
      .replace("**title**", prd.title)
      .replace("**url**", prd.thumbnail)
      .replace("**price**", prd.price)
      .replace("**rating**", prd.rating);

    //   let ModifiedIndex = index.replace("**url**", product.thumbnail);
    res.end(ModifiedIndex); // SSR
    return;
  }
  // Routes - making endpoints
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data)); // Static Hosting - Backend
      break;

    // case "/product":
    //   res.setHeader("Content-Type", "text/html");
    //   let ModifiedIndex = index
    //     .replace("**title**", product.title)
    //     .replace("**url**", product.thumbnail)
    //     .replace("**price**", product.price)
    //     .replace("**rating**", product.rating);

    //   //   let ModifiedIndex = index.replace("**url**", product.thumbnail);
    //   res.end(ModifiedIndex); // SSR
    //   break;

    default:
      res.writeHead(404);
      res.end();
      break;
  }

  // setting new Header
  //   res.setHeader("key", "value");
  //   res.setHeader("Content-Type", "application/json");
  // Case : 1 sending Response
  //   res.end("<h1>hello Welcome</h1>"); - content type - default as string
  // Case : 2 sending Response JS Object as JSON  -> content type - application/json
  //   res.end(JSON.stringify(data));
  // Case : 3 sending Response -> content type - text/html
  //   res.end("hello");
  // Case : 4
  //   res.end(index); // Static Hosting - Backend
  //   res.end(data); // Static Hosting - Backend
});

// listen binding to port number
server.listen(8080);
