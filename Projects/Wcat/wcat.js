const fs = require("fs");
const n = require("./Commands/n");
const b = require("./Commands/b");
const s = require("./Commands/s");
const sb = require("./Commands/sb");
const sn = require("./Commands/sn");
const none = require("./Commands/none");

let argArray = process.argv.slice(2);
let filePaths = [];
for (let i in argArray) {
  if (fs.existsSync(argArray[i]) && fs.lstatSync(argArray[i]).isFile()) {
    filePaths.push(argArray[i]);
  }
}

let sFlag = argArray.includes("-s");
let bFlag = argArray.includes("-b");
let nFlag = argArray.includes("-n");

if (!sFlag && !bFlag && !nFlag) {
  none.none(filePaths);
}
if (sFlag && !bFlag && !nFlag) {
  s.s(filePaths);
}
if (!sFlag && bFlag && !nFlag) {
  b.b(filePaths);
}
if (!sFlag && !bFlag && nFlag) {
  n.n(filePaths);
}
if (sFlag && bFlag && !nFlag) {
  sb.sb(filePaths);
}
if (sFlag && !bFlag && nFlag) {
  sn.sn(filePaths);
}
if (!sFlag && bFlag && nFlag) {
  console.log("Invalid Choice");
}
if (sFlag && bFlag && nFlag) {
  console.log("Invalid Choice");
}
