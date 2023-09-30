# File system :

- file system module fetched
  const fs = require("fs");

# fs.readFileSync(path[, options])

- Read the file
  const txt = fs.readFileSync("demo.txt", "utf-8");

- Returns the contents of the path.
- If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.

# fs.readFile(path[, options], callback)

- path
  - <string> | <Buffer> | <URL> | <integer>
  - filename or file descriptor
- options <Object> | <string>
  - encoding <string> | <null> Default: null
  - flag <string> See support of file system flags. Default: 'r'.
  - signal <AbortSignal> allows aborting an in-progress readFile
- callback <Function>
  - err <Error> | <AggregateError>
  - data <string> | <Buffer>
- Asynchronously reads the entire contents of a file.
- The callback is passed two arguments (err, data),
  where data is the contents of the file.
