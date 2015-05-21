var fs = require('fs');
var path = require('path');
var data;

module.exports = function(dir,ext,callback){
	fs.readdir(dir,function(err,list){
		if(err) return callback(err);
		
		data = list.filter(function(file){
			return path.extname(file) === '.'  + ext ;
		});
		callback(null,data);
	});
}