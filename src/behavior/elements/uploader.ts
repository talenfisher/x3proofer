import { CustomElement } from "../decorators";
import Session from "../session";
import X3P from "x3p.js";
import Popup from "../popup";

@CustomElement("uploader")
export default class UploaderElement extends HTMLElement {
    private input: HTMLInputElement;

    connectedCallback() {
        this.input = this.querySelector("input");
        this.setupListeners();
    }

    setupListeners() {
        this.input.addEventListener("change", this.read.bind(this));  
    }

    async read() {
        // read in X3P data here
        let loadingPopup = new Popup("Loading...");
        loadingPopup.display();

        try {
            
            let file = this.input.files[0];
            let x3p = await X3P.load({ 
                file,
                name: file.name,
                missingFactorThreshold: localStorage.getItem("missing-threshold")
            });

            loadingPopup.hide(true);
            Session.start(x3p);
        } catch(error) {
            loadingPopup.update("Invalid X3P file specified.");
            setTimeout(() => loadingPopup.hide(true), 2000);
        }
    }
}