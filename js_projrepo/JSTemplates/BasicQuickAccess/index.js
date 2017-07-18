Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

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

var QAGroupList = ['single-group'];

var QAUtil = {};
QAUtil.checkForGroupExistence = function(groupname) {
  return QAGroupList.contains(groupname);
}
QAUtil.renderGroup = function (groupname) {
  var parentNode = document.getElementById("div-id");
  var html = '<ul id="'+groupname+'" class="flex-container wrap">';
  parentNode.innerHTML += html;
}
QAUtil.renderQAItem = function(groupname,filepath) {
  var parentNode = document.getElementById(groupname);
  var html = '<li class="flex-item">'+filepath+'</li>';
  parentNode.innerHTML += html;
}

var wfb = {};
wfb.ui = {};
wfb.ui.qawidget = function (config,context) {
  var groupname = config.groupname;
  var filepath = config.filepath;
  defineGetter(this, "groupname", function() {
		return groupname;
	});
	defineSetter(this, "groupname", function(val) {
    groupname = val;
	});
  defineGetter(this, "filepath", function() {
		return filepath;
	});
	defineSetter(this, "filepath", function(val) {
		filepath = val;
	});
  if(!groupname){
    groupname = "single-group";
  }
  if(QAUtil.checkForGroupExistence(groupname)) {
    QAUtil.renderQAItem(groupname,filepath);
  } else {
    QAUtil.renderGroup(groupname);
    QAUtil.renderQAItem(groupname,filepath);
  }
}