function initFormatter() {
  CodeMirror($("#code-mirror")[0], {
    mode: "javascript",
    lineNumbers: true,
    theme: "base16-dark"
  });
}