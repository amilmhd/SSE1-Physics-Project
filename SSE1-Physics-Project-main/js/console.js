function logToConsole(text) {
  const c = document.getElementById("console");
  c.innerText += text + "\n";
  c.scrollTop = c.scrollHeight;
}
