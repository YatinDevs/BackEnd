// NPM Modules :

// - https://www.npmjs.com/

// * CLI commands :

// * Installing Nodemon Globally
// - npm i nodemon -g

// * Initialize similar to git:
// - npm init

// * .gitignore file
// to avoid pushing node modules files

// * Dependancy added :
// npm i date-fns

// * Dev Dependancy:
// npm i nodemon --save-dev OR
// npm i nodemon -D

// * Gives or generates Unique Ids every Re-render Or Restart of server:
// npm i uuid

/*

! Package.json

* package.json is a configuration file for node projects which has 
scripts, dependencies, devDependencies etc

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

- "^majorVersion.minorversion.patchfix"

- * keep all updates "express": "*4.18.2"  like "5.18.2" // Not safe
- ^ keep minor updates "express": "^4.18.2"  like "^4.20.7"
- ~ strict only patch fix updates  "express": "~4.18.2"   // restricted
-   specific version  "express": "4.18.2"  // specification

# check outdated packages
 - npm outdated
 - npm update

# npm uninstall 
 npm uninstall express
 npm rm express 
 npm un express

*/

// In Nodejs Mostly we Do Asynchronous Work.

/*
! Topics Overview : 
* Document Reference :- https://nodejs.org/en/docs
? 1. Module System :
   - CJS modules.
   - ES6 Modules.
? 2. REPL.
? 3. File System Module.
? 4. Package.json - (All about)
  -  NPM - https://www.npmjs.com/


*/
