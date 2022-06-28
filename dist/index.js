"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const user = User_1.User.buildUser({ id: 1, name: 'John', age: 32 });
user.on('change', () => {
    console.log('Some changes occured', user);
});
user.fetch();
