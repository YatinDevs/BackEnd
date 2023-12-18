// Callback hell created
// we are controlling flow but its getting tedious
// In Nodejs we can control better with promises too.

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "demo.txt"),
      "utf8"
    );

    console.log(data);
    await fsPromises.unlink(
      path.join(__dirname, "files", "demo.txt"),
      data + "writing data using Promise "
    );

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data + "writing data using Promise "
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n Appending File data with promises in Nodejs"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseRenamed.txt")
    );

    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseRenamed.txt"),
      "utf8"
    );

    console.log(newdata);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
