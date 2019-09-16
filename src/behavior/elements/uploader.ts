import { CustomElement } from "../decorators";
import Session from "../session";
import X3P from "x3p.js";
import Popup from "../popup";

@CustomElement("uploader")
export default class UploaderElement extends HTMLElement {
    private input: HTMLInputElement;
    private label: HTMLElement;

    connectedCallback() {
        this.label = this.querySelector("label")
        this.input = this.querySelector("input");
        this.setupListeners();
    }

    setupListeners() {
        let listener = e => e.preventDefault();
        for(let event of ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"]) {
            this.label.addEventListener(event, listener);
        }
        
        this.input.addEventListener("change", e => this.read.apply(this, [this.input.files[0]]));
        this.label.addEventListener("dragenter", e => this.label.classList.add("hover"));
        this.label.addEventListener("dragleave", e => this.label.classList.remove("hover"));
        this.label.addEventListener("drop", e => {
            e.stopPropagation();
            this.read(e.dataTransfer.files[0]);
        });
    }

    async read(file: File) {
        // read in X3P data here
        let loadingPopup = new Popup("Loading...");
        loadingPopup.display();

        try {
            let x3p = await X3P.load({ 
                file,
                name: file.name,
                missingFactorThreshold: parseFloat(localStorage.getItem("missing-threshold"))
            });

            loadingPopup.hide(true);
            Session.start(x3p);
        } catch(error) {
            loadingPopup.update("Invalid X3P file specified.");
            setTimeout(() => loadingPopup.hide(true), 2000);
        }
    }
}