"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repository/user.repository");
class UserService {
    getAll() {
        return user_repository_1.userRepository.getAll();
    }
    create(user) {
        return user_repository_1.userRepository.create(user);
    }
    getById(userId) {
        return user_repository_1.userRepository.getById(userId);
    }
}
exports.userService = new UserService();
