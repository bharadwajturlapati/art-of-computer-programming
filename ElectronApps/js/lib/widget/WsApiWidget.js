$wsf.widget.ApiWidget = {
	render : function() {

	},
	updateView : function() {
		var htmlString = "";
		var tabContent = "";
		var apicallManager = this.apiCallManagerPartial();
		var apiConfiguration = this.apiConfigurationPartial();
		var responseHeader = "";
		var apiResponse = this.apiResponsePartial();
	},
	apiCallManagerPartial : function() {
		var apicallManager = "";
		return apicallManager;
	},
	apiConfigurationPartial : function() {
		var apiConfiguration = "<div class='api-configuration'> <div role='tabpanel'>"
				+ +"</div></div>"
		var tabs = "";
		var tabContent = "";
		" <!-- Nav tabs --> <ul class='nav nav-tabs nav-line' role='tablist'> <li role='presentation' class=''><a href='#api-authorization' aria-controls='home5' role='tab' data-toggle='tab' aria-expanded='false'>Authorization</a></li> <li role='presentation' class='active'><a href='#api-headers' aria-controls='profile5' role='tab' data-toggle='tab' class='active' aria-expanded='true'>Headers</a></li> <li role='presentation'><a href='#api-body' aria-controls='messages5' role='tab' data-toggle='tab'>Body</a></li> </ul> <!-- Tab panes --> <div class='tab-content api-config-tabs'> <div role='tabpanel' class='tab-pane' id='api-authorization'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> </div> <div role='tabpanel' class='tab-pane active' id='api-headers'> <p>Ut in leo ut libero sodales feugiat</p> </div> <div role='tabpanel' class='tab-pane' id='api-body'> <p>Duis ac enim diam</p> </div> </div>";
		return apiConfiguration;
	},
	apiResponsePartial : function() {
		var apiResponse = "<div id='api-response' class='response'></div>";
		return apiResponse;
	}
}