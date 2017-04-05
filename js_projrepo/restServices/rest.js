var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
	var self = this;
	self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {

	/*
	 * Get Hello world
	 */
	router.get("/", function(req, res) {
		res.json({
			"Message" : "Hello World !"
		});
	});

	/*
	 * Get all accounts
	 */
	router.get("/accounts", function(req, res) {
		var query = "SELECT * FROM ??";
		var table = ["account"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing MySQL query"
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Accounts" : rows
				});
			}
		});
	});

	/*
	 * Get all Orders
	 */
	router.get("/orders", function(req, res) {
		var query = "SELECT * FROM ??";
		var table = ["accountorders"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing MySQL query"
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Orders" : rows
				});
			}
		});
	});

	/*
	 * Get orders by orderID
	 */
	router.get("/orders/:orderid", function(req, res) {
		var orderid = req.params.orderid;
		var query = "SELECT * FROM ?? WHERE orderid = " + orderid;
		var table = ["accountorders"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : err
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Orders" : rows
				});
			}
		});
	});

	/*
	 * Get orders by account id
	 */
	router.get("/orders/account/:accid", function(req, res) {
		var accid = req.params.accid;
		var query = "SELECT * FROM ?? WHERE accid = " + accid;
		var table = ["accountorders"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : err
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Orders" : rows
				});
			}
		});
	});

	/*
	 * Get orders by account id and order id
	 */
	router.get("/orders/:accid/:orderid", function(req, res) {
		var accid = req.params.accid;
		var orderid = req.params.orderid;
		var query = "SELECT * FROM ?? WHERE accid = " + accid
		        + "AND orderid = " + orderid;
		var table = ["accountorders"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : err
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Orders" : rows
				});
			}
		});
	});

	/*
	 * Get Accounts by account ID
	 */
	router.get("/account/:accid", function(req, res) {
		var accid = req.params.accid;
		var query = "SELECT * FROM ?? WHERE accountid = " + accid;
		var table = ["account"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing MySQL query"
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Accounts" : rows
				});
			}
		});
	});

	/*
	 * get orders by limit
	 */
	router.get("/orderslimit/:limit", function(req, res) {
		var limit = req.params.limit;
		var query = "SELECT * FROM ?? limit " + limit;
		var table = ["accountorders"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing MySQL query"
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Message" : "Success",
				    "Orders" : rows
				});
			}
		});
	});

	router.post("/account", function(req, res) {
		var requestBody = req.body;
		var accountid = "NULL";
		var emailid = requestBody.emailid;
		var mobilenumber = requestBody.mobilenumber;
		var address = requestBody.address;
		var query = "INSERT into ?? values (" + accountid + ',\'' + emailid + '\',\''
		        + mobilenumber + '\',\'' + address + "\')";
		var table = ["account"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing mySqlQuery",
				    "StackTrace" : err
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Response" : rows
				});
			}
		});
	});
	
	router.delete("/account/:accid", function(req, res) {
		var accountid = req.params.accid;
		var query = "DELETE FROM ?? where accountid="+ accountid;
		var table = ["account"];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({
				    "Error" : true,
				    "Message" : "Error executing mySqlQuery",
				    "StackTrace" : err
				});
			}
			else {
				res.json({
				    "Error" : false,
				    "Response" : rows
				});
			}
		});
	});
}
module.exports = REST_ROUTER;