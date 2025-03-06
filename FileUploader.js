const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: Arial, sans-serif;
        }
        .file-info {
            font-size: 14px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>

    <div class="container">
        <input type="file" id="fileUploadButton">
        <input type="text" id="fileName" readonly placeholder="No file selected">
        <div class="file-info" id="fileInfo"></div>
    </div>
`;

class FileUploader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(template.content.cloneNode(true));
        this.fileInput = this.shadowRoot.querySelector("#fileUploadButton");
        this.fileNameInput = this.shadowRoot.querySelector("#fileName");
        this.fileInfoDiv = this.shadowRoot.querySelector("#fileInfo");

        this.fileInput.addEventListener("change", this.handleFileSelect.bind(this));
    }

    async handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        this.fileNameInput.value = file.name;

        this.fileInfoDiv.textContent = `Name: ${file.name}
Type: ${file.type || "Unknown"}
Size: ${file.size} bytes`;
    }
}

customElements.define("file-uploader", FileUploader);
