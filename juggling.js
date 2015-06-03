var http = require('http');
var bl = require('bl');

var result = [];
var count = 0;

function printData(){
	for(var v = 0;v<3;v++){
		console.log(result[v]);
	}
}

function httpGET(index){
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(err,data){
			if (err) 
				console.error(err);

			result[index] = data.toString();
			count++;

			if(count == 3){
				printData();
			}
		}));
	});	
}

for(var x = 0;x<3;x++){
	httpGET(x);
}