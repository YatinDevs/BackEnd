// Web SErver in NODEJS
// SSR

const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const product = data.products[1];
const products = data.products;
// const data = { age: 5, username: "yatin" };

/*

// Case : Getting Overview:
const server = http.createServer((req, res) => {
  console.log("server Started..");

  console.log(req.url);

  // setting headers - created new
  res.setHeader("Dummy", "DummyValue");

  // Editing pre-exisitng Content-types header
  //   res.setHeader("Content-type", "text/html");
  //   res.end("Welcome");

  // Case 1 : html data/ text
  //   res.setHeader("Content-type", "text/html");
  //   res.end(indexfile); // static file send

  // Case 2 : json Data

  //   res.setHeader("Content-Type", "application/json");
  //   res.end(JSON.stringify(data));

  res.setHeader("Content-Type", "application/json");
  res.end(productdata);
  // No need to stringify here because we fetched data as utf-8
});
*/

// Case : Server Rendered Site Example.
const server = http.createServer((req, res) => {
  console.log("server Started..");

  console.log(req.url, req.method);
  if (req.url.startsWith("/product")) {
    console.log(req.url.split("/"));

    const id = req.url.split("/")[2];
    console.log(id);
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);

    res.end(modifiedIndex);
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;

    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    // case "/product":
    //   res.setHeader("Content-Type", "text/html");
    //   let modifiedIndex = index
    //     .replace("**title**", product.title)
    //     .replace("**url**", product.thumbnail)
    //     .replace("**price**", product.price)
    //     .replace("**rating**", product.rating);

    //   res.end(modifiedIndex);
    //   break;

    default:
      res.writeHead(404);
      //   res.writeHead(404, "NT FOUND");
      res.end();
  }
});

server.listen(8080);

/*
 Case 1: Server Rendered Site (Static html file Hosting)
 Case 2: Server Rendered Site (Dynamic Hosting)
 Case 3: API Generation.
*/
