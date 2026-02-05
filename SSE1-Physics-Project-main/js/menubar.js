document.getElementById("menubar").innerHTML = `
    <div class="menu-item">File
        <div class="dropdown">
            <div onclick="openFolder()">Open Folder</div>
            <div onclick="openFile()">Open File</div>
            <div onclick="saveFile()">Save</div>
        </div>
    </div>

    <div class="menu-item">Tools
        <div class="dropdown">
            <div onclick="compile()">Compile</div>
        </div>
    </div>
`;
