$wsf.appModel = {}

function addNavBar() {
	var navbar = new $wsf.ui.navui();
	$wsf.appModel.navbar = navbar;
}

function appModelInit() {
	addNavBar();
}