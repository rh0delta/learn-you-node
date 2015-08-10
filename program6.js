var mymodule = require("./module1");

var callback = function(err,list){
  if(err){
    return console.error(err);
  }
  // console.log(data);
  list.forEach(function(e){
    if(e.split(".")[1] === process.argv[3]){
      console.log(e);
    }
  });
};

mymodule(process.argv[2], process.argv[3], callback);