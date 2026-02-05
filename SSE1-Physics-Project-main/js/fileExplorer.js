async function loadFolderToExplorer(folderHandle) {
  const explorer = document.getElementById("file-explorer");
  explorer.innerHTML = "";

  for await (const entry of folderHandle.values()) {
    if (entry.kind === "file") {
      const div = document.createElement("div");
      div.className = "file-item";
      div.textContent = entry.name;

      div.onclick = async () => {
        currentFileHandle = entry;
        const file = await entry.getFile();
        const text = await file.text();
        openFileInEditor(entry.name, text);
      };

      explorer.appendChild(div);
    }
  }
}

