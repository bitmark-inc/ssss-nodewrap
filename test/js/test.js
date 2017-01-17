var ssss = require('../../src/js/ssss.js')();

console.log(ssss);

var abc = '1234567890123456789012';
var results = ssss.split(abc, 3, 5);


for (var i = 0; i < 5; i ++) {
	console.log(results[i]);
}


// var shares = ['1-c998761bb75aff94ed73','2-c5e5fd6c07c549cbbaa5','3-b41b4d6006c406c17da9'];
var shares = [results[0], results[1], results[2]];
console.log(shares);
var result = ssss.combine(shares);

// console.log(result);