import { User } from "../models/user.model";
class UserRepository {
    getAll() {
        return User.find();
    }
    create(user) {
        return User.create(user);
    }
    getById(userId) {
        return User.findById(userId);
    }
    updateById(userId, userUpdated) {
        return User.findByIdAndUpdate(userId, userUpdated, { new: true });
    }
    deleteById(userId) {
        return User.findByIdAndDelete(userId);
    }
}
export const userRepository = new UserRepository();
