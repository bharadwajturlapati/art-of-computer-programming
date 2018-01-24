var db = require('node-mysql');
var DB = db.DB;


var box = new DB({
    host     : '10.10.24.120',
    user     : 'jenkins',
    password : 'kony123!',
    database : 'machineslist',
    connectionLimit: 250
});

var basicTest = function(cb) {
    box.connect(function(conn, cb) {
        cps.seq([
            function(_, cb) {
                conn.query('select * from machines', cb);
            },
            function(res, cb) {
                console.log(res);
                cb();
            }
        ], cb);
    }, cb);
};