var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "htmlmixed"
});
CodeMirror.commands["selectAll"](editor);

function getSelectedRange() {
  return {
    from: editor.getCursor(true),
    to: editor.getCursor(false)
  };
}

function autoFormatSelection() {
  var range = getSelectedRange();
  editor.autoFormatRange(range.from, range.to);
}

function commentSelection(isComment) {
  var range = getSelectedRange();
  editor.commentRange(isComment, range.from, range.to);
}