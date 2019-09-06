import { CustomElement } from "../decorators";
import Session from "../session";

@CustomElement("panorama")
export default class Panorama extends HTMLElement {
    connectedCallback() {
        this.setupListeners();
    }

    private setupListeners() {
        Session.on("start", () => this.view = "proofer");
        Session.on("end", () => this.view = "uploader");
    }

    set view(viewName: "uploader" | "proofer") {
        this.setAttribute("view", viewName);
    }
}