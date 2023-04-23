const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

const fs = require("fs");

rl.question("Enter text to file\n", (text) => {
  fs.writeFile("./sample.txt", text, (err, data) => {
    if (!err) console.log("file created sucessfully");
  });
  rl.close();
});
