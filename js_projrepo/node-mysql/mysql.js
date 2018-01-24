var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "10.10.24.120",
  user: "jenkins",
  password: "kony123!"
});


function getAllMachines(){
	connection.connect();
	
	connection.query("select * from machineslist.machines", function (err, result, fields) {
		if (err){
			throw err;
		}
		console.log(result);
	});
  
	connection.end();
}

getAllMachines();