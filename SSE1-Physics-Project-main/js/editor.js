let openTabs = {};
let activeFile = null;

const tabs = document.getElementById("tabs");
const editor = document.getElementById("editor");

function openFileInEditor(filename, content) {
  if (!openTabs[filename]) {
    createTab(filename);
    openTabs[filename] = content;
  }
  setActiveTab(filename);
  editor.value = openTabs[filename];
}

function createTab(filename) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = filename;

  const closeBtn = document.createElement("span");
  closeBtn.textContent = " ×";
  closeBtn.classList.add("close-btn");

  closeBtn.onclick = (e) => {
    e.stopPropagation();
    closeTab(filename, tab);
  };

  tab.appendChild(closeBtn);

  tab.onclick = () => setActiveTab(filename);

  tabs.appendChild(tab);
}

function setActiveTab(filename) {
  activeFile = filename;

  Array.from(tabs.children).forEach(t =>
    t.classList.toggle("active", t.textContent.includes(filename))
  );

  editor.value = openTabs[filename];
}

function closeTab(filename, tabElement) {
  delete openTabs[filename];
  tabElement.remove();

  if (activeFile === filename) {
    const keys = Object.keys(openTabs);
    if (keys.length > 0) setActiveTab(keys.at(-1));
    else editor.value = "";
  }
}

editor.addEventListener("input", () => {
  if (activeFile) {
    openTabs[activeFile] = editor.value;
  }
});
