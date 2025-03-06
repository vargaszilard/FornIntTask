const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    </style>

    <div class="container">
        <input type="file" id="fileUploadButton" name="Upload">
    </div>
`

class FileUploader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("file-uploader", FileUploader);