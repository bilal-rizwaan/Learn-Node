const fs = require("fs");
// 1...  fs.writeFileSync("read.txt","There Is Some Node Stuff");
// fs.readFileSync("read.txt");

// 2... const bu= fs.readFileSync("read.txt");
// console.log(bu);

// 3... const bu= fs.readFileSync("read.txt");
// const sh= bu.toString();
// console.log(sh);

fs.appendFileSync("read.txt","More Stuff Add");