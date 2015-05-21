var myModule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir,ext,function(err,list){
	if(err)
		throw error;
	for(var a=0;a<list.length;a++){
		console.log(list[a]);
	}
});