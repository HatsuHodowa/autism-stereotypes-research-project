/**
page.js

This script manages navigation bar functionality and allows for successful navigation across the pages on this site.
**/

// Gui variables
const navButtons = document.getElementsByClassName("nav-bar-button")
const pageIFrame = document.getElementById("current-page")

// Connecting buttons
for (let i = 0; i < navButtons.length; i++) {
	let button = navButtons[i]
	button.onclick = function() {
		switchPage(button)
	}
}

// Page navigation functions
function switchPage(pageButton) {
	
	// Setting new page
	pageIFrame.src = "Pages/" + pageButton.getAttribute("pageref") + ".html"
	
	// Adjusting button colors
	for (let i = 0; i < navButtons.length; i++) {
		let button = navButtons[i]
		button.classList.toggle("active", false)
		if (button.getAttribute("pageref") == pageButton.getAttribute("pageref")) {
			button.classList.toggle("active", true)
		}
	}
}