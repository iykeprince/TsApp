"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSync = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiSync {
    constructor(url) {
        this.url = url;
    }
    fetch(id) {
        return axios_1.default.get(`${this.url}/${id}`);
    }
    save(data) {
        const { id } = data;
        if (id) {
            return axios_1.default.put(`${this.url}/${id}`, data);
        }
        return axios_1.default.post(this.url, data);
    }
}
exports.ApiSync = ApiSync;
