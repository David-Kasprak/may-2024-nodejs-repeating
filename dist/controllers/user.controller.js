import { StatusCodesEnum } from "../enums/status-codes.enum";
import { userService } from "../services/user.service";
class UserController {
    async getAll(req, res, next) {
        try {
            const data = await userService.getAll();
            res.status(StatusCodesEnum.OK).json(data);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const data = await userService.getById(id);
            res.status(StatusCodesEnum.OK).json(data);
        }
        catch (e) {
            next(e);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const userUpdated = req.body;
            const data = await userService.updateById(id, userUpdated);
            res.status(StatusCodesEnum.OK).json(data);
        }
        catch (e) {
            next(e);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await userService.deleteById(id);
            res.status(StatusCodesEnum.NO_CONTENT).end();
        }
        catch (e) {
            next(e);
        }
    }
}
export const userController = new UserController();
