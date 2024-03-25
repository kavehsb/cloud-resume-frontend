function updateVisitorCount() {
	let visitorCount = localStorage.getItem("visitorCount") || 0;
	visitorCount = parseInt(visitorCount) + 1;
	localStorage.setItem("visitorCount", visitorCount);
	document.getElementById("visitorCount").textContent = visitorCount;
}

window.addEventListener("load", updateVisitorCount);