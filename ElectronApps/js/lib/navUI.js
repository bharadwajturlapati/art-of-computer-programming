 $wsf.ui.navui = function() {
	// Extract Data From Config Object 
	var status = "closed";
	//Define Getters and Setters for the UI Model
	defineGetter(this, "status", function() {
		return status;
	});
	defineSetter(this, "status", function(val) {
		status = val;
	});
}