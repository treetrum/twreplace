var naughtyArr = [];
var naughtyVar = -1;

window.addEventListener('load', twReplace());
window.addEventListener('focus', function(){ twReplace() });
window.addEventListener('blur', function(){ gracefulUnload() });

function twReplace() {
	// Unload any previous instances of TWReplace before loading this one.
	gracefulUnload();

	// Select all elements with the data-twreplace selector
	var elementsToReplace = document.querySelectorAll('[data-twreplace]');

	// Call the playTicker function on each of them separately.
	for (var i = 0; i < elementsToReplace.length; i++) {
		var arrayOfData = JSON.parse(elementsToReplace[i].dataset.twreplace);
		var wordSpeed = elementsToReplace[i].dataset.twreplaceWordspeed;
		var charSpeed = elementsToReplace[i].dataset.twreplaceCharspeed;

		playTicker(elementsToReplace[i], arrayOfData, wordSpeed, charSpeed);
	}
}

function playTicker(element, content, wordSpeed, charSpeed) {
	if (typeof wordSpeed === "undefined") { wordSpeed = 2000; }
	if (typeof charSpeed === "undefined") { charSpeed = 25; }
	var lastUsedIndex = 0;
	naughtyArr[++naughtyVar] = setInterval(function(){
		var randomIndex = Math.floor(Math.random() * content.length);

		if (randomIndex === lastUsedIndex) {
			if (randomIndex + 1 >= content.length) {
				randomIndex--
			} else {
				randomIndex++;	
			}
		}
		lastUsedIndex = randomIndex;

		changeWord(element, content[randomIndex], charSpeed);
	}, wordSpeed);
}

function setIntervalXTimes(callback, delay, iterations, loopCount) {
	if (typeof loopCount === 'undefined') { loopCount = [0]; } // If loopCount is not given, init it here
	var x = 0;
	var intervalID = window.setInterval(function() {
		loopCount[0]++;
		callback();
		if (++x === iterations) {
			window.clearInterval(intervalID);
		}
	}, delay);
}

function changeWord(selector, newWord, typingSpeed) {
	if (typeof typingSpeed === "undefined") { typingSpeed = 25; }
	var oldWordLength = selector.innerHTML.length;
	var oldWord = selector.innerHTML;
	var newWordLength = newWord.length;

	var loopCount = [0];
	setIntervalXTimes(function(){
		oldWord = oldWord.slice(0,-1)
		selector.innerHTML = oldWord;

		var newWordCounter = 0;
		if (loopCount[0] === oldWordLength) {
			setIntervalXTimes(function(){
				newWordCounter++;
				selector.innerHTML = newWord.slice(0, newWordCounter);
			}, typingSpeed, newWordLength);
		}
	}, typingSpeed, oldWordLength, loopCount);
}

function gracefulUnload() {
	for (var i = 0; i < naughtyArr.length; i++) {
		window.clearInterval(naughtyArr[i]);
	}
	naughtyArr = [];
	naughtyVar = -1;
}