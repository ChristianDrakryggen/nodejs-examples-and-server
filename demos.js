const person = require("./person");
const Car = require("./car");

const path = require("path");
const fs = require("fs");
const http = require("http");

/*console.log(person);

const vovlo = new Car("2021", "Volvo", "XC90");

vovlo.presentation();*/

//---Path metoder----//

/*
//Basename - name of file
console.log(path.basename(__filename));

//Dirname - name of directory
console.log(path.dirname(__filename));

//Extension - type of file extension
console.log(path.extname(__filename));

//Parse - Parse path object
console.log(path.parse(__filename));

//Join - Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
*/

//----Filesystem metoder----//
/*
//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) {
    throw err;
  }
  console.log("Folder created!");
});

//Create and write to file
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello world, it's a nodejs day",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File created");
  }
);

//Write to existing file
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " and it's raining in Malmö",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File written to");
  }
);
*/
//Readfile
/*fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File renamed");
  }
);*/

//----Http-metoder----//

//Create server object
http
  .createServer((req, res) => {
    res.write("Hello world from Malmö!");
    res.end();
  })
  .listen(5000, () => console.log("Server is up n' running!"));
