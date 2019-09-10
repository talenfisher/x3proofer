import { CustomElement } from "../decorators";
import Session from "../session";

@CustomElement("backbtn")
export default class BackBtn extends HTMLElement {
    connectedCallback() {
        this.setupListeners();
    }

    private setupListeners() {
        this.addEventListener("click", () => Session.end());
    }
}