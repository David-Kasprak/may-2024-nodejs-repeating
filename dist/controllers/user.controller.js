import { StatusCodesEnum } from "../enums/status-codes.enum";
import { userService } from "../services/user.service";
class UserController {
    async getAll(req, res) {
        const data = await userService.getAll();
        res.status(StatusCodesEnum.OK).json(data);
    }
    async create(req, res, next) {
        try {
            const user = req.body;
            const data = await userService.create(user);
            res.status(StatusCodesEnum.CREATED).json(data);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res) {
        const { id } = req.params;
        const data = await userService.getById(id);
        res.status(StatusCodesEnum.OK).json(data);
    }
    async update(req, res) {
        const { id } = req.params;
        const userUpdated = req.body;
        const data = await userService.updateById(id, userUpdated);
        res.status(StatusCodesEnum.OK).json(data);
    }
    async delete(req, res) {
        const { id } = req.params;
        await userService.deleteById(id);
        res.status(StatusCodesEnum.NO_CONTENT).end();
    }
}
export const userController = new UserController();
