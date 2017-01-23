var ssss = require('../../src/js/ssss.js')();

var abc = '22QqnQxKCED1FPK9QZXtrk4MHhc1tZ7AcWtAwP5n644MRXq9zkbUFf';

for (var i =0; i< 50; i++ ) {
	var results = ssss.split(abc, 3, 5, false);
	console.log('original : ', abc, results);



	var shares = [results[0], results[1], results[2]];
	var result = ssss.combine(shares, false);
	console.log('original : ', abc);
	console.log('combine  : ', result.toString());

	console.log('=================================================', i);
}


// var shares = [results[0], results[1], results[2]];
// var result = ssss.combine(shares, true);
// console.log('original : ', abc);
// console.log('combine  : ', result, result.trim().length);


// var shares = [
// 	"1-a10bc2707290b9ce271aa664754977c3cb178203ade60f127a2f95b9544d1b76de090245d0be8aae92e4fb0aff15a1154186221c05cf",
//  	"3-8778e4724b133ac4efa562ce137b0e36ff8c36ec12fc79ac1ea078a914634319a4b5ee4c9f63f52fdb456585a58e014d365ca28ea282"];
// var result = ssss.combine(shares).toString();
// console.log('combine  : ', result);
// console.log('combine  : ', result.length);