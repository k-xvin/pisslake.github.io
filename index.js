// called when page loaded
/*document.addEventListener('DOMContentLoaded', function(e){

	setupListeners();
	console.log("dom content loaded");
});*/

function setupListeners(){
	pissbtn = document.getElementById("pissbtn");
	pissbtn.addEventListener("click", onPissClick);

	let lakebtn = document.getElementById("lakebtn");
	lakebtn.addEventListener("click", onLakeClick);
}

function onPissClick(){
	console.log("piss");
}

function onLakeClick(){
	console.log("lake");
}