var fs = require('fs');
// console.log(process.argv[1].split('/'));
// console.log(process.argv);
fs.readdir(process.argv[2], function(err,list){
  // if (err) throw err;
  // console.log(list);
  var extension = process.argv[3];
  var answer = list.filter(function(e){
    var extLength = extension.length;
    return(e.split(".")[1] === extension);
  });
  answer.forEach(function(e){
    console.log(e);
  });
});
