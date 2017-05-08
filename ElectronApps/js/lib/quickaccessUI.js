$wsf.ui.quickaccess = function(config) {
	// Extract Data From Config Object 
	var url = config.url;
	var logicalgroup = config.logicalgroup;
	var logicalname = config.logicalname;
	//Define Getters and Setters for the UI Model
	defineGetter(this, "url", function() {
		return url;
	});
	defineSetter(this, "url", function(val) {
		url = val;
		// Need to Implement this
		//$WIDGETS[this.wType]["updateView"](this,  "text" , val);
	});
	defineGetter(this, "logicalgroup", function() {
		return url;
	});
	defineSetter(this, "logicalgroup", function(val) {
		url = val;
		// Need to Implement this
		//$WIDGETS[this.wType]["updateView"](this,  "text" , val);
	});
	defineGetter(this, "logicalname", function() {
		return url;
	});
	defineSetter(this, "logicalname", function(val) {
		url = val;
		// Need to Implement this
		//$WIDGETS[this.wType]["updateView"](this,  "text" , val);
	});
}