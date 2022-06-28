"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Model_1 = require("./models/Model");
const Attributes_1 = require("./models/Attributes");
const ApiSync_1 = require("./models/ApiSync");
const Eventing_1 = require("./models/Eventing");
const rootUrl = "https://jsonplaceholder.typicode.com/users";
class User extends Model_1.Model {
    static buildUser(attr) {
        return new User(new Attributes_1.Attributes(attr), new ApiSync_1.ApiSync(rootUrl), new Eventing_1.Eventing());
    }
}
exports.User = User;
