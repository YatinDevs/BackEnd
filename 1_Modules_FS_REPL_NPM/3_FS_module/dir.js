const fs = require("fs");

// Case 1 : create new Directory
// Case 2 : if exists check for existsSync doesnt do anything
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;

    console.log("Directory Created!");
  });
  // exit on uncaught errors
  process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });
}

// case 3 : Deletes the new Directory

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;

    console.log("Directory Removed!");
  });
  // exit on uncaught errors
  process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });
}
