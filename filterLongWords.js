// filterLongWords.js

wordArr = [
	"now",
	"is",
	"the",
	"time",
	"for",
	"all",
	"good",
	"men"
	];

	maxLength = 4;

	filtered_array = [];

	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i].length < maxLength) {
			filtered_array.push(wordArr[i]);
		}
	}

	console.log(filtered_array);
