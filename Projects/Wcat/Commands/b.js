const fs = require("fs");

function b(argArray) {
  let cnt = 1;
  for (let i in argArray) {
    var lines = fs.readFileSync(argArray[i], "utf-8").split("\n");
    for (let i in lines) {
      let line = lines[i];
      if (line.length >= 2) {
        console.log(cnt + " ", line);
        cnt++;
      } else {
        console.log(line);
      }
    }
  }
}
module.exports = {
  b: b,
};
