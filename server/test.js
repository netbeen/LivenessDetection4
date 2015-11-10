var net = require('net');

var server = net.createServer();

function sayHi(client){
	client.write('Hi!\n');
	client.write('Bye!\n');

	client.end();
}

server.on('connection',sayHi);

server.listen(9000);
