"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
class Attributes {
    constructor(data) {
        this.data = data;
    }
    getAll() {
        return this.data;
    }
    get(key) {
        return this.data[key];
    }
    set(update) {
        Object.assign(this.data, update);
    }
}
exports.Attributes = Attributes;
