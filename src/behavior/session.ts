import { EventEmitter } from "events";
import X3P from "x3p.js";

export interface SessionData {
    x3p: X3P
}

export class Session extends EventEmitter {
    private data: SessionData;

    public constructor() {
        super();
        this.setMaxListeners(50);
    }

    public start(x3p: X3P) {
        this.data = { x3p };
        this.emit("start", x3p);
    }

    public end() {
        delete this.data;
    }
}

const session = new Session();
export default session;