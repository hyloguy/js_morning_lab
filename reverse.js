// reverse.js

var inputString = "building"
var outputString = ""

for (var i = inputString.length - 1; i >= 0; i--) {
	outputString += inputString[i];
}

console.log(outputString);
