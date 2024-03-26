function updateVisitorCount() {
	const url = "https://3qjnb2btqj.execute-api.us-west-2.amazonaws.com/test/incrementCount"
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
		// Update the visitor count in the HTML
		let visitorCount = data.body;
		document.getElementById("visitorCount").textContent = visitorCount;
	});
}

window.addEventListener("load", updateVisitorCount);