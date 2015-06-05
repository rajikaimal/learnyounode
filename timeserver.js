var net = require('net');

var server = net.createServer(function(socket){
	var date = new Date();
	var year = date.getFullYear();
	var month = "0"+(1+date.getMonth());
	var dateX = "0"+date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var val = year + "-" + month + "-" + dateX + " " + hours + ":" + minutes;

	socket.end(val + '\n');
});

server.listen(Number(process.argv[2]));