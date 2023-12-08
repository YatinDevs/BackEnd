// * > What is Node ?

// Node.js is JavaScript runtime Enviornment built on top of V8 JS Engine.
// Nodejs Package has some Extra APIs.
// Nodejs is Asynchronous.
// Non-Blocking I/O.

// * > Is it a Web Server?
// No . ITs Run time Enviornment.
// But using Framework like Express  we can make Web Server
// also can create application using Electron (like Vscode).

// * > Why Node web server?

// Heavy I/O. Example :  Streaming Platform , Video input output.
// Small code FootPrint. :

// Inside Terminal :
// - type :  node for Node REPL interface
// - have nodejs API's only not Browser APIs.

// * Module System :
// In Nodejs Each file is considered as Module.

/*
# Document Reference :

- https://nodejs.org/en
- https://nodejs.org/en/docs
- https://nodejs.org/dist/latest-v18.x/docs/api/

- includes all core modules :
- Commonly used :
- http
- os
- file system
- stream
- event

! Chapter 1 - Introduction to Node, NPM, Package.JSON

[ Chapter Notes ]]

- Node JS installation from official site nodejs.org - use only LTS versions.
- Use terminal / command prompt to check installation : node -v npm -v .
- VS Code installation directly from code.visualstudio.com site.
- Use VS code terminal to run commands.
- Node REPL interface can be used directly by typing node in terminal / 
 command prompt . Use Ctrl+D to exit interface. Use CTRL+C to exit terminal.
- Running any JavaScript file from node using node filename.js.
- Modules are basic containers in Node/JavaScript system. 1 file can be one module in Javascript.
- Two type of Module Systems in node JS are - CommonJS module and ES Modules.


! CommonJS Module

lib.js
exports.sum = function(){}

index.js
const module = require('./lib.js')
module.sum();
! ES Module

lib.js
export {sum}

index.js
import {sum} from './lib.js'

! FileSystem


! Package.json
Defination :
* A module is a single JavaScript file that has some reasonable functionality.
* A package is a directory with one or more modules inside of it and a package.json
file which has metadata about the package.

- npm - Node package Manager
- node packages
- node modules
- all are present in it and we download from NPM

# creating dependencies :
- added npm install express

# creating devdependencies :
- npm install nodemon --save-dev
- In nodemon on changes server automatically restarts
- good for developement purpose

# "express": "^4.18.2"

- * keep all updates "express": "*4.18.2"  like "5.18.2"
- ^ keep minor updates "express": "^4.18.2"  like "^4.20.7"
- ~ strict no updates  "express": "~4.18.2"  restricted

# check outdated packages
 - npm outdated


# npm uninstall 
 npm uninstall express
*/

// In Nodejs Mostly we Do Asynchronous Work.

/*
 Topics Overview : 
 Document Reference :- https://nodejs.org/en/docs
 1. Module System :
   - CJS modules.
   - ES6 Modules.
 2. REPL.
 3. File System Module.
 4. Package.json - (All about)
  -  NPM - https://www.npmjs.com/

  - npm install nodemon --save-dev

  - npm install --global nodemon

*/
