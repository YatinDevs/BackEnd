const fs = require("fs");
// path module to elimate problems with path of files.
const path = require("path");

console.log("script Start");

// Case 1 : ReadFile
// fs.readFile("./demo.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   //   console.log(data); // Buffer Data
//   //   console.log(data.toString()); // convert to string
//   // or  instead use encoding 'utf8'
//   console.log(data); // encoding 'utf8'
// });
// The process is a global object, an instance of EventEmitter,can be accessed from anywhere.
// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// readFile is async.

// Case 2 : Readfile with Path module
// path module to elimate problems with path of files.
fs.readFile(path.join(__dirname, "files", "demo.txt"), "utf8", (err, data) => {
  if (err) throw err;
  //   console.log(data); // Buffer Data
  //   console.log(data.toString()); // convert to string
  // or  instead use encoding 'utf8'
  console.log(data, `Reading file... Completed`); // encoding 'utf8'
});

// Case 3 : WriteFile with Path module
// Lets make one file with writeFile :
// WriteFile --> creates new File and can add data to it.
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Writing in New File",
  (err) => {
    if (err) throw err;
    console.log("Write Completed.." + "reply.txt file written!");
  }
);

// Case 4 : AppendFile with Path module
// AppendFile --> creates new File if doesnt exist and can add data to if
// already exists.
fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "Appending in File",
  (err) => {
    if (err) throw err;
    console.log("Append Completed.." + "test.txt file appended!");
  }
);

// Case 5 :  writefile and then append file
fs.writeFile(
  path.join(__dirname, "files", "case5.txt"),
  "Writing in New File named case5 text file",
  (err) => {
    if (err) throw err;
    console.log("Write Completed.." + "case5.txt file written!");

    fs.appendFile(
      path.join(__dirname, "files", "case5.txt"),
      "\n\nAppending in File named case5 text file",
      (err) => {
        if (err) throw err;
        console.log("Append Completed.." + "case5.txt file appended!");

        fs.rename(
          path.join(__dirname, "files", "case5.txt"),
          path.join(__dirname, "files", "case5_w_a_r.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename Completed.." + "case5_w_a_r.txt file Renamed!");
          }
        );
      }
    );
  }
);

// Callback hell created
// we are controlling flow but its getting tedious
// In Nodejs we can control better with promises too.

const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "demo.txt"),
      "utf8"
    );

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
