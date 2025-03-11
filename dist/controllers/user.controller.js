"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const status_codes_enum_1 = require("../enums/status-codes.enum");
class UserController {
    async getAll(req, res) {
        const data = await user_service_1.userService.getAll();
        res.status(status_codes_enum_1.StatusCodesEnum.OK).json(data);
    }
    async create(req, res) {
        const user = req.body;
        const data = await user_service_1.userService.create(user);
        res.status(status_codes_enum_1.StatusCodesEnum.CREATED).json(data);
    }
    async getById(req, res) {
        const { id } = req.params;
        const data = await user_service_1.userService.getById(id);
        res.status(status_codes_enum_1.StatusCodesEnum.OK).json(data);
    }
}
exports.userController = new UserController();
