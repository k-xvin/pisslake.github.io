// called when page loaded
document.addEventListener('DOMContentLoaded', function(e){

	setupListeners();
});

function setupListeners(){
	 pissbtn = document.getElementById("pissbtn");
	pissbtn.addEventListener("click", onPissClick);

	let lakebtn = document.getElementById("lakebtn");
	lakebtn.addEventListener("click", onLakeClick);
}

function onPissClick(){
	window.alert("piss");
}

function onLakeClick(){
	window.alert("lake");
}