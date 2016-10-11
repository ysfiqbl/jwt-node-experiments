var jws = require('jws');
var base64url = require('base64-url');

var header = {
	'alg': 'HS256',
	'typ': 'JWT'
}

var payload = {
	'sub': '1234567890',
	'name': 'John Doe',
	'admin': true
}

var secret = 'secret';

const headerString = JSON.stringify(header);
const payloadString = JSON.stringify(payload);

console.log('HeaderString:' + headerString);
console.log('Payload String:' + payloadString);

//const encodedHeader = Buffer.from(JSON.stringify(header), 'base64');
const encodedHeader = base64url.encode(JSON.stringify(header));
const encodedPayload = base64url.encode(JSON.stringify(payload));

console.log('Encoded Header + Payload:' + encodedHeader + '.' + encodedPayload);
console.log('Token');
console.log('-----');
const token = jws.sign({header:header, payload: payload, secret: 'secret'});
console.log(token);

console.log('Decrypted');
console.log('---------');
decodedString = jws.decode(token);
console.log(decodedString);


