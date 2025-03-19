import { userRepository } from "../repository/user.repository";
class UserService {
    getAll() {
        return userRepository.getAll();
    }
    create(user) {
        return userRepository.create(user);
    }
    getById(userId) {
        return userRepository.getById(userId);
    }
    updateById(userId, userUpdated) {
        return userRepository.updateById(userId, userUpdated);
    }
    deleteById(userId) {
        return userRepository.deleteById(userId);
    }
}
export const userService = new UserService();
