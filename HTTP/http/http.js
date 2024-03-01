/**
 * Http Module
 * 
    standard portocol - 
    http  -> Hyper text transfer Protocol
   
    protocol set of rules
    ftp- file transfer protocol

  URL -> Uniform Resource Locator 

  
  https://flipkart.com/signup
  https://localhost:4000/signup
  https://localhost:4000/path
  https://flipkart.com/login
  https://flipkart.com/shop/shirts
  params  -> item --> shirt  -> control on value only
  query params -> ?size=M&color=red -> control as key value pair

 */
/*

node -----used--> serverside -----result----> webbrowser
through node we make webapplication---runs on---> webbrowser
webbrowser ------ understands-----> html

*/// make a server listener on some local ports

const http = require('http');


// request and response --> arugements passed
const server = http.createServer((req,res)=>{
    console.log("Req Recieved!!",req.methodS);
    console.log("Response Url!!",req.url);

    res.write("<h1>Student Management System</h1>")
    res.write("<u>Welcome<u><br>")


   
    if(req.url === "/login"){
        res.write('welcome to login Page!!');
    }else if(req.url === "/signup"){
        res.write('welcome to Signup Page!!');
    }else{
        res.write('Page Not Found!!');
    }


    res.end() // without end function browser keeps 
    //buffering and expecting  more data from local host
})



server.listen(8080,()=>{
    console.log("server is running on port : 8080 ");
})



// 103.168.249.106/:4000 to run on connected pcs
// domain name = amazon facebook as we cant remember codes of server ip 


// npm i nodemon --g  
// npx nodemon httpexample.js  -- to run file to start server
// edit and refresh  webpage no need to re run program normally