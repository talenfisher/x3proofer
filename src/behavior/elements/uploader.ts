import { CustomElement } from "../decorators";
import Session from "../session";

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

    read() {
        // read in X3P data here
        Session.start();
    }
}