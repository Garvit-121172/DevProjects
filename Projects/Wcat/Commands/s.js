const fs = require("fs");

function s(argArray) {
  for (let i in argArray) {
    var lines = fs.readFileSync(argArray[i], "utf-8").split("\n");
    let flag = false;
    for (let i in lines) {
      let line = lines[i];
      if (line.length >= 2 || flag == false) {
        console.log(line);
        flag = false;
      }
      if (line.length < 2) {
        flag = true;
      }
    }
  }
}
module.exports = {
  s: s,
};
