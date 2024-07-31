import Messenger from "./Messenger";

export default {
    actions: {} as any,
    messages: {} as Record<string, any>,
    messenger: {} as Messenger,

    push(msg: any) {
        this.messages[msg.$id] = msg;
        return true;
    },
    getAction(key: string) {
        return this.actions[key];
    },
    addAction(obj: any) {
        this.actions = { ...this.actions, ...obj };
    },
    getById(id: string) {
        if (id in this.messages) {
            const obj = this.messages[id];
            delete this.messages[id];
            return obj;
        }
        return false;
    }
};