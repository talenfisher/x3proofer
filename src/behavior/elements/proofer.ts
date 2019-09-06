import { CustomElement } from "../decorators";
import Session from "../session";
import X3P from "x3p.js";

@CustomElement("proofer")
export default class Proofer extends HTMLElement {
    connectedCallback() {
        this.setupListeners();
    }

    private setupListeners() {
        Session.on("start", this.read.bind(this));
    }

    private read(x3p: X3P) {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.appendChild(canvas);
        
        let renderer = x3p.render(canvas);
        // interact with the renderer
    }
}