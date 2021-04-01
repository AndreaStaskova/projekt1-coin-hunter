// global variables
let hunter = document.getElementById("panacek");
let coin = document.getElementById("mince");
let hunterW = 64; //px
let hunterH = 70; //px
let hunterStep = 15; //px
let coinW = 36; //px
let coinH = 36; //px

function hunterPosition() {

	hunter.style.top = ((window.innerHeight / 2) - (hunterH / 2)) + "px";
	hunter.style.left = ((window.innerWidth / 2) - (hunterW / 2)) + "px";
}

function move(udalost) {

	let startTop = parseInt((window.getComputedStyle(hunter)).top);
	let startLeft = parseInt((window.getComputedStyle(hunter)).left);
	let backgroundMusic = document.getElementById("hudba");

	backgroundMusic.play();

	if (udalost.key == "ArrowDown") {
		hunter.src = "obrazky/panacek.png";
		if (startTop < (window.innerHeight - hunterH)) {
			hunter.style.top = (startTop + hunterStep) + "px";
		} else {
			hunter.style.top = (window.innerHeight - hunterH) + "px";
		}
	} else if (udalost.key == "ArrowUp") {
		hunter.src = "obrazky/panacek-nahoru.png";
		if (startTop > 0) {
			hunter.style.top = (startTop - hunterStep) + "px";
		} else {
			hunter.style.top = "0px";
		}	
	} else if (udalost.key == "ArrowLeft") {
		hunter.src = "obrazky/panacek-vlevo.png";
		if (startLeft > 0) {
			hunter.style.left = (startLeft - hunterStep) + "px";
		} else {
			hunter.style.left = "0px";
		}	
	} else if (udalost.key == "ArrowRight") {
		hunter.src = "obrazky/panacek-vpravo.png";
		if (startLeft < (window.innerWidth - hunterW)) {
			hunter.style.left = (startLeft + hunterStep) + "px";
		} else {
			hunter.style.left = (window.innerWidth - hunterW) + "px";
		}
	} else if (udalost.key != "F5") {
		alert("Use arrow keys to move the hunter.");
	}
}
	
function coinRandom() {

	coin.style.top = (Math.random() * (window.innerHeight - coinH)) + "px";
	coin.style.left = (Math.random() * (window.innerWidth - coinH)) + "px";
}	

function checkMove() {
	
	let hunterX = parseInt((window.getComputedStyle(hunter)).left);
	let hunterY = parseInt((window.getComputedStyle(hunter)).top);
	let coinX = parseInt((window.getComputedStyle(coin)).left);
	let coinY = parseInt((window.getComputedStyle(coin)).top);

	if (hunterX < (coinX + coinW / 2) && (hunterX + hunterW) > (coinX + coinW / 2) && hunterY < (coinY + coinH / 2) && (hunterY + hunterH) > (coinY + coinH / 2)) {
		let score = Number(document.getElementById("score").textContent);
		score = score + 1;
		document.getElementById("score").textContent = score;
		coinRandom();
		let coinSound = document.getElementById("zvukmince");
		coinSound.play();
		if (score == 5) {
			let fanfare = document.getElementById("zvukfanfara");
			fanfare.play();
			alert("Congrats! You won!");
		}
	}
}	

	
	

