import joi from "joi";

export class AuthValidator {
    public static refresh = joi.string().trim();

    public static refreshToken = joi.object({
        refreshToken: this.refresh.required(),
    });
}
