var goButton = document.getElementById("go");
goButton.onclick =function() {
	var doi = document.getElementById("doi").value;
	chrome.tabs.create({url:"https://dx.doi.org/"+doi});
};