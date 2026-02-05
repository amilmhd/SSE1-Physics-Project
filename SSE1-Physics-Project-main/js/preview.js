document.getElementById("editor").addEventListener("input", () => {
  document.getElementById("preview").innerText = editor.value;
});
