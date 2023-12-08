# Step for package.json from stratch :

- 1. npm init
- 2. package_name all details for package creation

- If we dont create this package.json file we wont be able to use
  modules of npm properly.

# NPM

- https://www.npmjs.com/
- npm - Node package Manager
- node packages
- node modules
- all are present in it and we download from NPM

- dependencies and devdependencies :

# creating dependencies :

- added npm install express

# creating devdependencies :

- npm install nodemon --save-dev
- In nodemon on changes server automatically restarts
- good for developement purpose

- In Scripts :

  - we create command for nodemon to use nodemon dev dependencies
    "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    }
  - npm run start

- without node mon server is on with current data
  - on change server is still on no update on it
    "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
  - npm run start

# global install

- npm install --global nodemon

- Error on terminal: nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

I have a solution to fix the issue by this way:

1. Open Windows PowerShell with Run as Administrator
2. Run this command: Set-ExecutionPolicy Unrestricted
