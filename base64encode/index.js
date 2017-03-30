
// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
var login = process.argv[2]
var password = process.argv[3]

var encoded =new Buffer(login + ':' + password).toString('base64') 
console.log(encoded)

