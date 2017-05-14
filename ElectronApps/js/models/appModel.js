$wsf.appModel = {
	quickaccess : {
		children:[]
	},
	browser : {
		children:[]
	},
	todolist : {
		children:[]
	},
	api : {
		children:[]
	},
	fip : {
		children:[]
	},
	own : {
		children:[]
	}
}

function addNavBar() {
	var navbar = new $wsf.ui.navui();
	$wsf.appModel.navbar = navbar;
}

function appModelInit() {
	addNavBar();
}