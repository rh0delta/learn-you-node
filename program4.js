var fs = require('fs');
var str = fs.readFile(process.argv[2], function(err,data){
  var lines = data.toString().split('\n');
  console.log(lines.length -1);
});
