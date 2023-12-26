// ! ## ## ## Why HTTP ## ## ## ?
// https://www.boot.dev/assignments/73a84056-e022-4f1f-9192-be8a6231d2ed
// * COMMUNICATING ON THE WEB
/*
 -  When two computers communicate with each other, they need to use the same rules.
   An English speaker can't communicate verbally with a Japanese speaker,
   similarly, two computers need to speak the same language to communicate.
  
   ?This "language" that computers use is called a protocol.
   
 -  The most popular protocol for web communication is HTTP, which stands for
   ?Hypertext Transfer Protocol.


*/

// * HTTP REQUESTS AND RESPONSES
/*

- At the heart of HTTP is a simple request-response system. 

- The "requesting" computer, also known as the "client", asks another computer for some information.
- That computer, "the server" sends back a response with the information that was requested.

- Which comes first?
HTTP Response 
HTTP Request 

Answer : HTTP Request.

*/

// * HTTP POWERS WEBSITES
/*
 Below MDN documents for References.

? > HTTP - https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
? > Protocol - https://developer.mozilla.org/en-US/docs/Glossary/Protocol

 - As we discussed, HTTP, or Hypertext Transfer Protocol, is a protocol designed 
  to transfer information between computers.
  
  There are other protocols for communicating over the internet, 
  but HTTP is the most popular and is particularly great for websites and 
  web applications. 
  
  Each time you visit a website, your browser is making an HTTP request to that 
  website's server.
  
  The server responds with all the text, images, and styling information that your
  browser needs to render its pretty website!

   Website data is requested via which internet communication protocol?
   - HTTP
*/

// * HTTP URLS

/*

? > URL - https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

  - A URL, or Uniform Resource Locator.
  
 -  Is essentially the address of another computer, or "server" on the internet. 
 
 - Part of the URL specifies how to reach the server. 
 - Part of it tells the server what information we want 
 - but more on that later.

  
  it's important to understand that a URL represents a piece of information on 
  another computer that we want access to. We can get access to it by making a
  request, and reading the response that the server replies with.

 
 */

// * USING URLS IN HTTP
/*

? > URL - https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

   The http:// at the beginning of a website URL specifies that the http protocol 
   will be used for communication.

Other communication protocols use URLs as well, (hence "Uniform Resource Locator"). 
That's why we need to be specific when we're making HTTP requests by prefixing 
the URL with http://


REQUESTS AND RESPONSES :

- A "client" is a computer making an HTTP request
- A "server" is a computer responding to an HTTP request
- A computer can be a client, a server, both, or neither.
- "Client" and "server" are just words we use to describe what computers 
are doing within a communication system.

- Clients send requests and receive responses
- Servers receive requests and send responses


JAVASCRIPT'S FETCH API
? > https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*/

// * WEB SERVERS

/*
- Up to this point, most of the data you have worked with in your code has simply
  been generated and stored locally in variables.

- While you'll always use variables to store and manipulate data while your 
program is running, most websites and apps use a web server to store, sort, and 
serve that data so that it sticks around for longer than a single session,
and can be accessed by multiple devices.

LISTENING AND SERVING DATA :
How a server at a restaurant brings your food to the table, a web server serves 
web resources, such as web pages, images, and other data. The server is turned 
on and "listening" for inbound requests constantly so that the second it receives
a new request, it can send an appropriate response.


THE SERVER IS THE BACK-END:
While the "front-end" of a website or web application is the device the user 
interacts with, the "back-end" is the server that keeps all the data housed in
a central location.

A SERVER IS JUST A COMPUTER
"Server" is just the name we give to a computer that is taking on the role of 
serving data across a network connection. 
A good server is turned on and available 24 hours a day, 7 days a week.
While your laptop can be used as a server, it makes more sense to use a computer
in a data center that's designed to be up and running constantly.



*/
// * WEB ADDRESSES

/*
  
In the real world, we use addresses to help us find where a friend lives, 
where a business is located, or where a party is being thrown. 

In computing, web clients find other computers over the internet using 
Internet Protocol or IP addresses.
   
   IP : consists - 4 section - 0-255 number
    8.14.124.46
    Above is Called IPv4.

   Similary we have IPv6
   In IPv6 - 8 sections 
    _ : _ : _ : _ : _ : _ : _ : _ 
    each sections has more information in it.
    
   - Remembering this IP addresses is Difficult 
   - lets say amazon.com as some IP address we dont know 
   - we Know its DNS -

   - i.e Domain Name System 
   - Its Job is to Map Human readable names  -- > to IP adresses.
   - here www.amazon.com -- > is associated to  --> particular IP Address
   - association done by DNS.

   2 Steps : When ever we need to send HTTP request to server on Given DN.
   1. Resolve DNS 
   2. Use obtained IP address to make Request

- An IP address is a numerical label that serves two main functions:
1.Location Addressing
2.Network Identification
*/

// DOMAIN NAMES AND IP ADDRESSES

/*
  - Each device connected to the internet has a unique IP address. 
  - When we browse the internet, the domains we navigate to are all associated 
    with a particular IP address!
  
Example :
 this Wikipedia URL points to a page about miniature pigs:
  https://en.wikipedia.org/wiki/Miniature_pig

The domain portion of the URL is en.wikipedia.org.
en.wikipedia.org converts to a specific IP address,
and that IP address tells your computer exactly where to communicate with 
that Wikipedia page.


*/

const domain = "api.boot.dev";

async function main() {
  const ipAddress = await fetchIPAddress(domain);
  if (!ipAddress) {
    console.log("something went wrong in fetchIPAddress");
  } else {
    console.log(`found IP address for domain ${domain}: ${ipAddress}`);
  }
}

async function fetchIPAddress(domain) {
  const resp = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
    {
      headers: {
        accept: "application/dns-json",
      },
    }
  );
  const respObject = await resp.json();

  return respObject.Answer[0].data;
}

// Call the asynchronous main function
main();
