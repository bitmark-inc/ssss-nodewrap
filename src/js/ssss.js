(function(ssss) {
'use strict';

var ffi = require('ffi');
var ref = require('ref');
var path = require('path');
var crypto = require('crypto');
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

  var ct = ffi.Library(path.resolve(root_dir, 'src/c/shamir'), {
    'wrapped_split': [ 'int', [StringArray, 'CString', 'int', 'int', 'int', 'bool', 'CString', 'bool', 'CString', 'int'] ],
    'wrapped_combine': [ 'int', ['CString', 'int', StringArray, 'int', 'bool', 'bool']  ]
  });
  var ssFactory = {};
  ssFactory.split = function(secret, t, n, hexmode) {
  	var tempResult = new StringArray(n);
    var randomBytes = crypto.randomBytes(t * 128);
    ct.wrapped_split(tempResult, secret, 0, t, n, false, null, hexmode, randomBytes, randomBytes.length);
    var results = [];
    for (var i = 0; i < n; i ++) {
    	results.push(tempResult[i].toString('hex'));
    }
    return results;
  };

  ssFactory.combine = function(shares, hexmode) {
    var tempSize = MAXDEGREE;
  	var result = (new Buffer(tempSize)).fill(0);
  	shares.forEach(function(item) {
  		var length = item.length;
  		item = new Buffer(item);
  		item = item.slice(0, length);
  	});
  	var error = ct.wrapped_combine(result, tempSize, shares, shares.length, false, hexmode);
  	return result.toString().replace(/\0/g, '');
  };

  return ssFactory;
};


})(module.exports);