import { CustomElement } from "../decorators";
import Session from "../session";
import X3P from "x3p.js";
import Status from "./status";

@CustomElement("proofer")
export default class Proofer extends HTMLElement {
    private status: Status;

    connectedCallback() {
        this.setupListeners();
    }

    private setupListeners() {
        Session.on("start", this.read.bind(this));
        Session.on("end", this.cleanup.bind(this));
    }

    private read(x3p: X3P) {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.appendChild(canvas);
        
        let renderer = x3p.render(canvas);
        renderer.on("start", () => {
            this.status = document.createElement("x3proofer-status") as Status;
            this.status.value = (x3p.anomalies.length > 0) ? "bad" : "good";
            this.appendChild(this.status);
            
            for(let anomaly of x3p.anomalies) {
                this.status.addReason(anomaly.description);
                console.log(anomaly);
            }
        });
    }

    private cleanup() {
        this.innerHTML = "";
    }
}