let currentFileHandle = null;
let currentFolderHandle = null;

async function openFolder() {
  currentFolderHandle = await window.showDirectoryPicker();
  await loadFolderToExplorer(currentFolderHandle);
}

async function openFile() {
  [currentFileHandle] = await window.showOpenFilePicker();
  const file = await currentFileHandle.getFile();
  const content = await file.text();
  openFileInEditor(file.name, content);
}

async function saveFile() {
  if (!currentFileHandle) {
    logToConsole("No file to save.");
    return;
  }
  const writable = await currentFileHandle.createWritable();
  await writable.write(editor.value);
  await writable.close();
  logToConsole("Saved file.");
}

function compile() {
  logToConsole("Compiling...");
}
