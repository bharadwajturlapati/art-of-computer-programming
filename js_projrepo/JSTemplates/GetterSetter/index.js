function defineGetter(obj, prop, get) {
	if (Object.defineProperty) {
		return Object.defineProperty(obj, prop, accessorDescriptor("get", get));
	}
	if (Object.prototype.__defineGetter__) {
		return obj.__defineGetter__(prop, get);
	}
}

function defineSetter(obj, prop, set) {
	if (Object.defineProperty) {
		return Object.defineProperty(obj, prop, accessorDescriptor("set", set));
	}
	if (Object.prototype.__defineSetter__) {
		return obj.__defineSetter__(prop, set);
	}
}
function accessorDescriptor(field, fun) {
	var desc = {
	    enumerable : true,
	    configurable : true
	};
	desc[field] = fun;
	return desc;
}

/*
 * Internal Library 
 * Cash Cow
 */

var $WFBWidget ={
		
}


$WFBWidget.qawidget = {
		render: function(context){
			// get parent node ID
			var parentNode = document.getElementById("div-id");
			//prepare html
			var html = "<p>1234</p>";
			parentNode.append(html);
			console.log("Into render");
		}
}
/*
 * User interface/ Framework driven
 */
var wfb = {};
wfb.ui = {};
wfb.ui.qawidget = function(config, context) {
	var text = config.text;
	this.widgetType = "qawidget";
	defineGetter(this, "text", function() {
		return text;
	});
	defineSetter(this, "text", function(val) {
		// Dirty Checking
		var oldvalue = text;
		text = val;
		//$WFB[this.widgetType].updateView();
	});
	$WFBWidget[this.widgetType].render("qa-tab-node");
}

//new widt(config, parentID);

