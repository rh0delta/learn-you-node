var net = require('net');


function check(i){
  if (i < 10) {
    return "0" + i;
  }else{
    return i;
  }
};

var server = net.createServer(function(socket){
  date = new Date();
  dateStr = date.getFullYear() + "-" + check(date.getMonth() + 1) + "-" 
  + check(date.getDate()) + " " + check(date.getHours()) + ":" + check(date.getMinutes()) + "\n";
  socket.end(dateStr);
});

server.listen(process.argv[2]);