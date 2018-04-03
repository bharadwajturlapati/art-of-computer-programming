var sqlite = require('sqlite3');

var quickaccessDbService = {
  getAllData: function(callback) {
  	var db = new sqlite.Database('qadb28032018.db');

    var arrOfResults = [];

    db.serialize(function() {
      db.each("SELECT * from user_data", function(err, row) {
        if (err) {
          return JsonUtils.createJson("errMessage", err);
        }
        arrOfResults.push(JsonUtils.createJson("user_id", row.data_id, null));
      }, function completioncb(err, intRowsReturned) {
        callback(arrOfResults);
      });
    });

    db.close();
    return 
  },

  insertData: function(url, shortname, groupname, groupid) {
    var db = new sqlite.Database('qadb28032018.db');
    var dateAsMMDDYYhhmmss = getDateAsMMDDYYYYhhmmss();
    var createdDate = "";
    var updatedDate = "";
    let dataId = new Date().getTime().toString();

    if (JsonUtils.emptyOrUndefined(createdDate)) {
      console.log("here");
      createdDate = dateAsMMDDYYhhmmss;
      updatedDate = dateAsMMDDYYhhmmss;
    }

    if (JsonUtils.emptyOrUndefined(groupname)) {
      console.log("here");
      groupname = "default_user_group";
    }

    if (JsonUtils.emptyOrUndefined(groupid)) {
      console.log("here");
      groupid = "d$d$d$";
    }

    db.serialize(function() {
      db.run("INSERT into user_data values (?,?,?,?,?,?,?)", dataId, groupid, url, shortname, groupname, createdDate, updatedDate, function(err) {
        if (err) {
          LOGGER.log(err);
        }
      });
    });
    db.close();
  },

  deleteData: function(dataId) {
    var db = new sqlite.Database('qadb28032018.db');
    db.serialize(function() {
      db.run("DELETE from user_data where data_id=(?)", dataId, function(err) {
        if (err) {
          LOGGER.log(err);
        }
      });
    });
    db.close();
  }
}