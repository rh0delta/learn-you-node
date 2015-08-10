var fs = require('fs');
// console.log(process.argv[1].split('/'));
// console.log(process.argv);
module.exports = function(dirName, extName, callback){
  fs.readdir(dirName, function(err,list){
    if (err) {
      return callback(err);
    }
    // console.log(list);
    var answer = list.filter(function(e){
      if (e.split(".")[1] === extName){  
        return(e);
      }
    });
    callback(null, answer);
  });

};
