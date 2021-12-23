const fs = require("fs");

function sb(argArray) {
  let cnt = 1;
  for (let i in argArray) {
    var lines = fs.readFileSync(argArray[i], "utf-8").split("\n");
    let flag = false;
    for (let i in lines) {
      let line = lines[i];
      if (line.length >= 2 || flag == false) {
        if (line.length < 2) {
          console.log(line);
        } else {
          console.log(cnt + " ", line);
          cnt++;
        }
        flag = false;
      }
      if (line.length < 2) {
        flag = true;
      }
    }
  }
}

module.exports = {
  sb: sb,
};
