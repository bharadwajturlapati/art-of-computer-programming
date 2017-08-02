Array.prototype.contains = function(obj) {
	var i = this.length;
	while (i--) {
		if (this[i] == obj) {
			return true;
		}
	}
	return false;
}
var QAUtil = {};
QAUtil.checkForGroupExistence = function(groupname) {
	return QAGroupList.contains(groupname);
}
QAUtil.renderGroup = function(groupname) {
	var parentNode = document.getElementById("quick-access");
	var html = '<ul id="' + groupname + '" class="flex-container wrap">';
	parentNode.innerHTML += html;
}
QAUtil.renderQAItem = function(groupname, name) {
	var parentNode = document.getElementById(groupname);
	var html = '<li class="flex-item">' + name + '</li>';
	parentNode.innerHTML += html;
}
$wsf.widget = {};
$wsf.widget.QuickAccess = {
	render : function(config) {
		var groupname = config.logicalgroup;
		var name = config.logicalname;
		if (!groupname) {
			groupname = "single-group";
		}
		if (QAUtil.checkForGroupExistence(groupname)) {
			QAUtil.renderQAItem(groupname, name);
		} else {
			QAUtil.renderGroup(groupname);
			QAUtil.renderQAItem(groupname, name);
		}
	},
	updateView : function() {

	}
}