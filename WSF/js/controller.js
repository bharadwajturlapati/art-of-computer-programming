function addLocationtoGrid() {
  var inputpath = $("#input-path").val();
  var locaname = $("#loca-name").val();
  addLocationToDB(inputpath, locaname);
  $("#popup-quickAccess").hide();
}

function closeDialog() {
  $("#popup-quickAccess").hide();
}

function addPlace(){
    $("#popup-quickAccess").show();
}