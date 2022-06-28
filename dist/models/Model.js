"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(attributes, sync, events) {
        this.attributes = attributes;
        this.sync = sync;
        this.events = events;
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    set(value) {
        this.attributes.set(value);
        this.events.trigger('change');
    }
    get get() {
        return this.attributes.get;
    }
    fetch() {
        const id = this.get('id');
        if (typeof id === 'number') {
            throw new Error('Cannot fetch with id');
        }
        this.sync.fetch(id).then((response) => {
            this.set(response.data);
        });
    }
    save(data) {
        this.sync.save(data).then((response) => {
            this.set(response.data);
            this.events.trigger('saved');
        }).catch(() => {
            this.events.trigger('error');
        });
    }
}
exports.Model = Model;
