import { EventEmitter } from "events";

export interface SessionData {

}

export class Session extends EventEmitter {
    private data: SessionData = {};

    public constructor() {
        super();
        this.setMaxListeners(50);
    }

    public start() {
        this.emit("start", this);
        this.data = {};
    }

    public end() {
        delete this.data;
    }
}

const session = new Session();
export default session;