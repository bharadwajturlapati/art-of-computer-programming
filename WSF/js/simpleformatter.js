var editor = undefined;
var beautify_js = require('js-beautify').js_beautify;
var beautify_html = require('js-beautify').html;


function initFormatter() {
  listenToEvents();
  CodeMirror($("#code-mirror")[0], {
    mode: "javascript",
    lineNumbers: true,
    theme: "base16-dark"
  });
  editor = $('.CodeMirror')[0].CodeMirror;
}

function autoFormatSelection() {
  var formattedtext = "";
  var getEditorMode  = editor.getOption("mode");
  if (getEditorMode == "javascript") {
    formattedtext = beautify_js(editor.getValue(), {
      indent_size: 2
    });
  } else if (getEditorMode == "xml") {
    formattedtext = beautify_html(editor.getValue(), {
      indent_size: 0
    });
  }

  editor.setValue(formattedtext);
}

function changeMode(mode) {
  editor.setOption("mode", mode);
}

function listenToEvents() {
  $('input[type=radio][name=optradio]').change(function() {
    if (this.value == 'on') {
      var name = this.parentNode.getAttribute("name");
      if (name == 'json') {
        changeMode('javascript');
      } else if (name == 'xml') {
        changeMode('xml');
      }
    }
  });
}