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
	//document.body.style.backgroundColor = "yellow";
	document.getElementsByClassName("circle")[0].classList.add("piss");
}

function onLakeClick(){
	console.log("lake");
	document.body.style.backgroundColor = "blue";
	document.getElementsByClassName("circle")[0].classList.remove("piss");
}