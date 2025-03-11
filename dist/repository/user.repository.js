"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_model_1 = require("../models/user.model");
class UserRepository {
    getAll() {
        return user_model_1.User.find();
    }
    create(user) {
        return user_model_1.User.create(user);
    }
    getById(userId) {
        return user_model_1.User.findById(userId);
    }
}
exports.userRepository = new UserRepository();
