var getDateAsMMDDYYYYhhmmss = function(){
	var date = "";
	var dateObject = new Date();
	date = dateObject.getMonth()+"-"+dateObject.getDate()+"-"+dateObject.getFullYear()+"-"+dateObject.getHours()+"-"+
	dateObject.getMinutes()+"-"+dateObject.getSeconds();
	return date;
}