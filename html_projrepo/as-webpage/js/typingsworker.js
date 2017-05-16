function runtypings(){
	postMessage("run worker function");
	setTimeout("runtypings()",10000);
}

runtypings();