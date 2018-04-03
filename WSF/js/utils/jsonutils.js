var JsonUtils = {
	createJson : function(key, value, object){
		if(this.emptyOrUndefined(object)){
			object = {};
		}
		object[key] = value;
		return object;
	},
	emptyOrUndefined : function(input){
		return input == null || input == undefined || input === "";
	}
}