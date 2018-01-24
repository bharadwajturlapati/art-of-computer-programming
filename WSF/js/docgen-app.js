var docgenUploadFilters = [{
    name: 'JSON Files',
    extensions: ['json']
}];

var docgenUploadCallback = function(fileNames) {
    var fileName = fileNames[0];
    fs.readFile(fileName, function read(err, data) {
        if (err) {
            throw err;
        }
        postToServer(data);
    });

}

function generateApiDoc() {
    var dialog = require('electron').remote.dialog;

    dialog.showOpenDialog({
        title: "Upload Json Collection",
        filters: docgenUploadFilters
    }, docgenUploadCallback);

}

function postToServer(fileData) {
    fetch("http://127.0.0.1:8000/waas/api/apidocgen/", {
            method: "POST",
            body: fileData.toString('utf-8'),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            window.open("data:text/html;charset=utf-8," + data, "", "_blank");
        });
}

function initDocGen() {
    CodeMirror($("#code-mirror")[0], {
        mode: "javascript",
        lineNumbers: true,
        theme: "base16-dark"
    });
}

function download() {
    var location = "templates/samplecollection.json";
    fs.readFile(location, function(err, data) {
        if (err) {
            console.log(err);
            text = "Error Occured. Please look at console.";
            return;
        }
        var editor = $('.CodeMirror')[0].CodeMirror;
        editor.setValue(data.toString());
    });
}