let playSound = function(e) {

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);

	if (!audio) return; //stops function from running

	audio.currentTime = 0; //rewinds to start of the audio

	audio.play();

	key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

let removeTransition = function(e) {
	if(e.propertyName !== 'transform') return; //skip if property isn't transform
	this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);