var fs = require('fs');



var str = fs.readFileSync(process.argv[2]).toString().split('\n').length;


console.log(str - 1);

