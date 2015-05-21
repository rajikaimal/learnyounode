var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function(err,list){
	for(var a=0;a<list.length;a++){
		if(path.extname(list[a]) === '.' + process.argv[3]){
			console.log(list[a]);
		}
	}
});