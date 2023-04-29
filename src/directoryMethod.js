const fsp = require("fs/promises");
const fs = require("fs");
const path = require("path");
const basepath = "./sampleDir";
const clc = require("cli-color");
let spacing = "";
async function showFiles(filepath) {
  const files = await fsp.readdir(filepath);
  try {
    files.forEach((file) => {
      let currentPath = path.join(filepath, file);
      let dir = fs.statSync(currentPath);
      if (dir.isDirectory()) {
        spacing += " ";
        console.log(spacing, clc.red(file));
        showFiles(currentPath); //if directory call functin showFiles to show inner files
      }
      dir.isFile() ? console.log(spacing, clc.blue(file)) : "";
    });
  } catch (err) {
    console.log(err);
  }
}

showFiles(basepath);
