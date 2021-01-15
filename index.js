function setupListeners(){
	pissbtn = document.getElementById("pissbtn");
	pissbtn.addEventListener("click", onPissClick);

	let lakebtn = document.getElementById("lakebtn");
	lakebtn.addEventListener("click", onLakeClick);
}

function onPissClick(){
	console.log("piss");
	document.body.style.backgroundColor = "yellow";
	document.getElementById("pissbtn").classList.add("piss");
}

function onLakeClick(){
	console.log("lake");
	document.body.style.backgroundColor = "blue";
	document.getElementById("pissbtn").classList.remove("piss");
}