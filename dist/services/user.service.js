import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { userRepository } from "../repository/user.repository";
class UserService {
    getAll() {
        return userRepository.getAll();
    }
    create(user) {
        return userRepository.create(user);
    }
    async getById(userId) {
        const user = await userRepository.getById(userId);
        if (!user) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }
        return user;
    }
    async updateById(userId, userUpdated) {
        const data = await userRepository.getById(userId);
        if (!data) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }
        return await userRepository.updateById(userId, userUpdated);
    }
    async deleteById(userId) {
        const data = await userRepository.getById(userId);
        if (!data) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }
        await userRepository.deleteById(userId);
    }
    async isEmailUnique(email) {
        const user = await userRepository.getByEmail(email);
        if (user) {
            throw new ApiError("User with this email already exists", StatusCodesEnum.BAD_REQUEST);
        }
    }
    async isActive(id) {
        const user = await this.getById(id);
        return user.isActive;
    }
    blockUser(userId) {
        return userRepository.blockUser(userId);
    }
    unBlockUser(userId) {
        return userRepository.unBlockUser(userId);
    }
}
export const userService = new UserService();
