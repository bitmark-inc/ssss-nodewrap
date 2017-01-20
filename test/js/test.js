var ssss = require('../../src/js/ssss.js')();

var abc = '123456789012345678901234567890123456789';
var results = ssss.split(abc, 3, 5);

console.log('original : ', abc);
for (var i = 0; i < 5; i ++) {
	console.log(results[i]);
}


var shares = [results[0], results[1], results[2]];
var result = ssss.combine(shares);
console.log('original : ', abc);
console.log('combine  : ', result.toString());
