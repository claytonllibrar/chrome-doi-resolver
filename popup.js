var goButton = document.getElementById("go");
goButton.onclick =function() {
	var doi = document.getElementById("doi").value;
	chrome.tabs.create({url:"http://up7af9tu5s.search.serialssolutions.com/?rft_id=info:doi/"+doi});
};