const fs = require("fs");
fs.writeFileSync("read.txt","There Is Some Node Stuff");
fs.readFileSync("read.txt");

