import { CustomElement } from "../decorators";

const ICONS = {
    "good": "check",
    "bad": "times"
};

@CustomElement("status")
export default class Status extends HTMLElement {
    private icon: HTMLElement;
    private reasons: HTMLElement;

    connectedCallback() {
        this.setup();
    }

    get value() {
        return (this.getAttribute("value") || "good") as "good" | "bad";
    }

    set value(value: "good" | "bad") {
        this.setup();

        if(value === "good") {
            this.setAttribute("value", "good");
            this.icon.setAttribute("class", "fa fa-check");
        } else {
            this.setAttribute("value", "bad");
            this.icon.setAttribute("class", "fa fa-times");
        }
    }

    private setup() {
        if(!this.icon) {
            this.icon = document.createElement("i");
            this.appendChild(this.icon);
        }

        if(!this.reasons) {
            this.reasons = document.createElement("ul");
            this.appendChild(this.reasons);
        }
    }

    public addReason(reason: string) {
        var li = document.createElement("li");
        li.innerHTML = reason;

        this.reasons.appendChild(li);
    }
}