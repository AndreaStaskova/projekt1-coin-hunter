// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
let hunter = document.getElementById("panacek");


function move(udalost) {
	//console.log(udalost);
	let startTop = parseInt((window.getComputedStyle(hunter)).top);
	let startLeft = parseInt((window.getComputedStyle(hunter)).left);

	if (udalost.key == "ArrowDown") {
		hunter.style.top = (startTop + 15) + "px";
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
		hunter.style.left = (startLeft + 15) + "px";
	} else {
		alert("Use arrow keys to move the hunter.");
	}
	//console.log(startTop);
	//console.log(startLeft);
	
	}
/**
ještě upravit aby se mince nedostávala na hranu window/view
 * 
 * @param {*} elementSelector 
 */	
function randomPlace(elementSelector) {
	let coin = document.getElementById(elementSelector);
	maxTop = window.innerHeight;
	maxLeft = window.innerWidth;
	coin.style.top = (Math.random() * maxTop) + "px"
	coin.style.left = (Math.random() * maxLeft) + "px"

}	
