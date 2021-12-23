const fs = require("fs");
const path = require("path");

function none(argArray) {
  for (let i in argArray) {
    if (fs.existsSync(argArray[i])) {
      if (fs.lstatSync(argArray[i]).isFile()) {
        let content = fs.readFileSync(argArray[i]);
        let fileName = path.basename(argArray[i]);
        console.log(`Content of ${fileName} is \n` + content);
      } else {
        console.log("opopopo");
      }
    } else {
      console.log("kye ");
    }
  }
}
module.exports = {
  none: none,
};
