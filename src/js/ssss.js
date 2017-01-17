(function(ssss) {
'use strict';

var ffi = require('ffi');
var ref = require('ref');
var path = require('path');
var ArrayType = require('ref-array');

var StringArray = ArrayType('CString');

// get root dir
var root_dir;
if (ffi.LIB_EXT === '.dll') {
  root_dir = path.resolve(__dirname.replace('\\src\\js', '\\'));
} else {
  root_dir = __dirname.replace('/src/js', '/');
}

module.exports = function() {
	var MAXDEGREE = 1024;

  var ct = ffi.Library(path.resolve(root_dir, 'src/c/ssss_custom'), {
    'split_custom': [ 'int', [StringArray, 'CString', 'int', 'int'] ],
    'combine_custom': [ 'int', ['CString', StringArray] ]
  });

  var ssFactory = {};

  ssFactory.split = function(secret, t, n) {
  	var temp = new StringArray(n);
    ct.split_custom(temp, secret, t, n);
    var results = [];
    for (var i = 0; i < n; i ++) {
    	results.push(temp[i].toString('hex'));
    }
    return results;
  };

  ssFactory.combine = function(shares) {
  	var result = (new Buffer(MAXDEGREE / 8 + 1)).fill(0);
  	shares.forEach(function(item) {
  		var length = item.length;
  		item = new Buffer(item);
  		item = item.slice(0, length);
  	});
  	var length = ct.combine_custom(result, shares);
  	console.log(length);
  	return result.slice(0, length);
  };

  return ssFactory;
};


})(module.exports);