// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// zatím je hunter globání, možná změnit?
let hunter = document.getElementById("panacek");
let coin = document.getElementById("mince");

function move(udalost) {
	
	let startTop = parseInt((window.getComputedStyle(hunter)).top);
	let startLeft = parseInt((window.getComputedStyle(hunter)).left);

	// tahle nested condition mi přijde trochu prasácká, možná to jde i nějak jednodušeji
	if (udalost.key == "ArrowDown") {
		if (startTop < (window.innerHeight - 70)) {
			hunter.style.top = (startTop + 15) + "px";
		} else {
			hunter.style.top = (window.innerHeight - 70) + "px";
		}
	} else if (udalost.key == "ArrowUp") {
		if (startTop > 0) {
			hunter.style.top = (startTop - 15) + "px";
		} else {
			hunter.style.top = "0px";
		}	
	} else if (udalost.key == "ArrowLeft") {
		if (startLeft > 0) {
			hunter.style.left = (startLeft - 15) + "px";
		} else {
			hunter.style.left = "0px";
		}	
	} else if (udalost.key == "ArrowRight") {
		if (startLeft < (window.innerWidth - 64)) {
			hunter.style.left = (startLeft + 15) + "px";
		} else {
			hunter.style.left = (window.innerWidth - 64) + "px";
		}
	} else {
		alert("Use arrow keys to move the hunter.");
	}
	//console.log(startTop);
	//console.log(startLeft);
	}

/**
 * 
 * @param {string} elementSelector 
 */	
function randomPlace(elementSelector) {
	document.getElementById(elementSelector).style.top = (Math.random() * (window.innerHeight - 36)) + "px";
	document.getElementById(elementSelector).style.left = (Math.random() * (window.innerWidth - 36)) + "px";
}	

function checkMove() {
	let hunterY = parseInt((window.getComputedStyle(hunter)).top);
	let hunterX = parseInt((window.getComputedStyle(hunter)).left);

	let coinX = parseInt((window.getComputedStyle(coin)).left);
	let coinY = parseInt((window.getComputedStyle(coin)).top);

	//console.log("hunter: ", hunterX, hunterY);
	//console.log("coin: ", coinX, coinY);
	//console.log("X: ", hunterX - coinX, "Y: ", hunterY - coinY)

	if ((hunterX - coinX) >= -40 && (hunterX - coinX) <= 15 && (hunterY - coinY) >= -40 && (hunterY - coinY) <= 15 ) {
		console.log("Score!");
		randomPlace("mince");
	}
	
}