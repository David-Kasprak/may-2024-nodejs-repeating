import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { commonMidleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAll);

router.post(
    "/",
    commonMidleware.validateBody(UserValidator.create),
    userController.create,
);

router.get("/:id", userController.getById);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export const userRouter = router;
