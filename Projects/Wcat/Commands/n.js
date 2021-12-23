const fs = require("fs");

function n(argArray) {
  let cnt = 1;
  for (let i in argArray) {
    var lines = require("fs").readFileSync(argArray[i], "utf-8").split("\n");
    for (let i in lines) {
      let line = lines[i];
      console.log(cnt + " ", line);
      cnt++;
    }
  }
}
module.exports = {
  n: n,
};
