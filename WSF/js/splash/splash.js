function dismiss(){
	//$("#spinner").removeClass();
}

function showMainPage(){
	window.location = "main.html"
}

function setTimeOutToReleaseSplash(){
	setTimeout(function(){
		dismiss();
		showMainPage();
	}, 1500);
}